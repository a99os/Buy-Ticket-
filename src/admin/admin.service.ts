import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAdminDto, LoginAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './model/admin.model';
import * as bcrypt from 'bcryptjs';
import { JwtPayloadForAdmin, Tokens } from './types';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private adminRepo: typeof Admin,
    private readonly jwtService: JwtService,
  ) {}
  async register(createAdminDto: CreateAdminDto, res: Response) {
    const admin = await this.adminRepo.findOne({
      where: { login: createAdminDto.login },
    });
    if (admin) {
      throw new HttpException('Bunday login mavjud', HttpStatus.BAD_REQUEST);
    }
    const hashed_password = await bcrypt.hash(createAdminDto.password, 7);
    const newAdmin = await this.adminRepo.create({
      ...createAdminDto,
      hashed_password,
    });
    const tokens = await this.getTokens(
      newAdmin.id,
      newAdmin.is_active,
      newAdmin.is_creator,
    );
    const data = await this.updateRefreshTokenHash(
      newAdmin.id,
      tokens.refresh_token,
    );
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return { tokens, data };
  }

  async login(loginAdminDto: LoginAdminDto, res: Response) {
    const admin = await this.adminRepo.findOne({
      where: { login: loginAdminDto.login },
    });
    if (!admin) {
      throw new HttpException('Bunday login mavjud emas', HttpStatus.NOT_FOUND);
    }
    const passwordMatches = await bcrypt.compare(
      loginAdminDto.password,
      admin.hashed_password,
    );
    if (!passwordMatches) throw new ForbiddenException('Acces Denied');

    const tokens = await this.getTokens(
      admin.id,
      admin.is_active,
      admin.is_creator,
    );
    const data = await this.updateRefreshTokenHash(
      admin.id,
      tokens.refresh_token,
    );
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return { tokens, data };
  }

  async refreshTokens(refresh_token: string, res: Response): Promise<Tokens> {
    const adminData = await this.verifyRefreshToken(refresh_token);
    const admin = await this.adminRepo.findOne({
      where: { id: adminData.sub },
    });
    if (!admin || !admin.hashed_refresh_token) {
      throw new ForbiddenException('Access Denied');
    }
    const rtMatches = await bcrypt.compare(
      refresh_token,
      admin.hashed_refresh_token,
    );
    console.log('Salom');
    if (!rtMatches)
      throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(
      admin.id,
      admin.is_active,
      admin.is_creator,
    );
    await this.updateRefreshTokenHash(admin.id, tokens.refresh_token);
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return tokens;
  }

  async logout(refresh_token: string, res: Response) {
    const adminData = await this.verifyRefreshToken(refresh_token);
    await this.adminRepo.update(
      { hashed_refresh_token: null },
      { where: { id: adminData.sub } },
    );
    res.clearCookie('refresh_token');
    return { message: 'Succes logout admin' };
  }

  async activeDeactivate(id: number, res: Response) {
    const admin = await this.adminRepo.findOne({
      where: { id },
    });
    if (!admin) {
      throw new HttpException('Bunday admin mavjud emas', HttpStatus.NOT_FOUND);
    }
    admin.is_active == false
      ? (admin.is_active = true)
      : (admin.is_active = false);
    await admin.save();

    const tokens = await this.getTokens(
      admin.id,
      admin.is_active,
      admin.is_creator,
    );
    const data = await this.updateRefreshTokenHash(
      admin.id,
      tokens.refresh_token,
    );
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return { data, tokens };
  }

  async creator(id: number, res: Response) {
    const admin = await this.adminRepo.findOne({
      where: { id },
    });
    if (!admin) {
      throw new HttpException('Bunday admin mavjud emas', HttpStatus.NOT_FOUND);
    }
    admin.is_creator == false
      ? (admin.is_creator = true)
      : (admin.is_creator = false);
    await admin.save();

    const tokens = await this.getTokens(
      admin.id,
      admin.is_active,
      admin.is_creator,
    );
    const data = await this.updateRefreshTokenHash(
      admin.id,
      tokens.refresh_token,
    );
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return { data, tokens };
  }

  async update(id: number, updateAdminDto: UpdateAdminDto, res: Response) {
    const admin = await this.adminRepo.findOne({
      where: { id },
    });
    if (!admin) {
      throw new HttpException('Bunday admin mavjud emas', HttpStatus.NOT_FOUND);
    }
    if (updateAdminDto.login) {
      const condidate = await this.adminRepo.findOne({
        where: { login: updateAdminDto.login },
      });
      if (condidate && condidate.id != id) {
        throw new HttpException('Bunday email mavjud ', HttpStatus.NOT_FOUND);
      }
    }
    updateAdminDto.password
      ? (updateAdminDto.password = await bcrypt.hash(
          updateAdminDto.password,
          7,
        ))
      : null;
    await this.adminRepo.update(
      {
        ...updateAdminDto,
        hashed_password: updateAdminDto.password,
      },
      { where: { id } },
    );

    return await this.adminRepo.findOne({ where: { id } });
  }

  async getAll() {
    return this.adminRepo.findAll({ include: { all: true } });
  }

  async getOne(id: number) {
    const admin = await this.adminRepo.findOne({
      where: { id },
    });
    if (!admin) {
      throw new HttpException('Bunday admin mavjud emas', HttpStatus.NOT_FOUND);
    }
    return this.adminRepo.findOne({ where: { id }, include: { all: true } });
  }

  async delete(id: number) {
    const admin = await this.adminRepo.findOne({
      where: { id },
    });
    if (!admin) {
      throw new HttpException('Bunday admin mavjud emas', HttpStatus.NOT_FOUND);
    }
    return this.adminRepo.destroy({ where: { id } });
  }

  async getTokens(
    adminId: number,
    is_active: boolean,
    is_creator: boolean,
  ): Promise<Tokens> {
    const jwtPayload: JwtPayloadForAdmin = {
      sub: adminId,
      is_active,
      is_creator,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }
  async updateRefreshTokenHash(
    id: number,
    refreshToken: string,
  ): Promise<Admin> {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 7);
    await this.adminRepo.update(
      { hashed_refresh_token: hashedRefreshToken },
      {
        where: {
          id,
        },
      },
    );

    return await this.adminRepo.findOne({ where: { id } });
  }

  async verifyRefreshToken(refresh_token: string) {
    try {
      return await this.jwtService.verify(refresh_token, {
        secret: process.env.REFRESH_TOKEN_KEY,
      });
    } catch (error) {
      throw new ForbiddenException('Acces Denied');
    }
  }
}
