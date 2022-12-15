import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCustomerDto } from './dto/create-customer.dto';
import {
  LoginCustomerDto,
  UpdateCustomerDto,
  UpdatePasswordDto,
} from './dto/update-customer.dto';
import { Customer } from './model/customer.model';
import { JwtPayloadForCustomer, Tokens } from './types';
import * as bcrypt from 'bcryptjs';
import { Response } from 'express';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer) private customerRepo: typeof Customer,
    private readonly jwtService: JwtService,
  ) {}
  async register(createCustomerDto: CreateCustomerDto, res: Response) {
    const customerEmail = await this.customerRepo.findOne({
      where: { email: createCustomerDto.email },
    });
    if (customerEmail) {
      throw new HttpException('Bunday email mavjud', HttpStatus.BAD_REQUEST);
    }
    const customerPhone = await this.customerRepo.findOne({
      where: { phone: createCustomerDto.phone },
    });
    if (customerPhone) {
      throw new HttpException(
        'Bunday phone number mavjud',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (createCustomerDto.password !== createCustomerDto.confirm_password) {
      throw new HttpException(
        'passwordlar mos emas mavjud',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashed_password = await bcrypt.hash(createCustomerDto.password, 7);
    const newCustomer = await this.customerRepo.create({
      ...createCustomerDto,
      hashed_password,
    });
    const tokens = await this.getTokens(newCustomer.id);
    const data = await this.updateRefreshTokenHash(
      newCustomer.id,
      tokens.refresh_token,
    );
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return { tokens, data };
  }

  async login(loginCustomerDto: LoginCustomerDto, res: Response) {
    const customer = await this.customerRepo.findOne({
      where: { email: loginCustomerDto.email },
    });
    if (!customer) {
      throw new HttpException('Bunday email mavjud emas', HttpStatus.NOT_FOUND);
    }

    const passwordMatches = await bcrypt.compare(
      loginCustomerDto.password,
      customer.hashed_password,
    );
    if (!passwordMatches) throw new ForbiddenException('Acces Denied');

    const tokens = await this.getTokens(customer.id);
    const data = await this.updateRefreshTokenHash(
      customer.id,
      tokens.refresh_token,
    );
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return { tokens, data };
  }

  async refreshTokens(refresh_token: string, res: Response): Promise<Tokens> {
    const customerData = await this.verifyRefreshToken(refresh_token);
    const customer = await this.customerRepo.findOne({
      where: { id: customerData.sub },
    });
    if (!customer || !customer.hashed_refresh_token) {
      throw new ForbiddenException('Acces Denied');
    }
    const rtMatches = await bcrypt.compare(
      refresh_token,
      customer.hashed_refresh_token,
    );
    if (!rtMatches) throw new ForbiddenException('Acces Denied');

    const tokens = await this.getTokens(customer.id);
    await this.updateRefreshTokenHash(customer.id, tokens.refresh_token);
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return tokens;
  }

  async logout(refresh_token: string, res: Response) {
    const customerData = await this.verifyRefreshToken(refresh_token);
    await this.customerRepo.update(
      { hashed_refresh_token: null },
      { where: { id: customerData.sub } },
    );
    res.clearCookie('refresh_token');
    return { message: 'Succes logout customer' };
  }

  async update(
    id: number,
    updateCustomerDto: UpdateCustomerDto,
    res: Response,
  ) {
    const customer = await this.customerRepo.findOne({
      where: { id },
    });
    if (!customer) {
      throw new HttpException(
        'Bunday customer mavjud emas',
        HttpStatus.NOT_FOUND,
      );
    }
    if (updateCustomerDto.email) {
      const condidateEmail = await this.customerRepo.findOne({
        where: { email: updateCustomerDto.email },
      });
      if (condidateEmail && condidateEmail.id != id) {
        throw new HttpException('Bunday email mavjud ', HttpStatus.NOT_FOUND);
      }
    }
    if (updateCustomerDto.phone) {
      const condidatePhone = await this.customerRepo.findOne({
        where: { phone: updateCustomerDto.phone },
      });
      if (condidatePhone && condidatePhone.id != id) {
        throw new HttpException('Bunday phone mavjud ', HttpStatus.NOT_FOUND);
      }
    }

    await this.customerRepo.update(updateCustomerDto, { where: { id } });

    return await this.customerRepo.findOne({ where: { id } });
  }

  async updatePassword(id: number, updatedPasswordDto: UpdatePasswordDto) {
    const customer = await this.customerRepo.findOne({ where: { id } });
    if (!customer) {
      throw new HttpException('Customer topilmadi', HttpStatus.NOT_FOUND);
    }
    const passwordMatches = await bcrypt.compare(
      updatedPasswordDto.old_password,
      customer.hashed_password,
    );
    if (!passwordMatches) {
      throw new ForbiddenException('Acces Denied');
    }
    if (updatedPasswordDto.password !== updatedPasswordDto.confirm_password) {
      throw new HttpException('passwordlar mos emas', HttpStatus.BAD_REQUEST);
    }
    const hashed_password = await bcrypt.hash(updatedPasswordDto.password, 7);
    await this.customerRepo.update({ hashed_password }, { where: { id } });
    return { message: 'Succesfull changed pasword' };
  }

  async getAll() {
    return this.customerRepo.findAll({ include: { all: true } });
  }

  async getOne(id: number) {
    const customer = await this.customerRepo.findOne({
      where: { id },
    });
    if (!customer) {
      throw new HttpException(
        'Bunday customer mavjud emas',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.customerRepo.findOne({ where: { id }, include: { all: true } });
  }

  async delete(id: number) {
    const customer = await this.customerRepo.findOne({
      where: { id },
    });
    if (!customer) {
      throw new HttpException(
        'Bunday customer mavjud emas',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.customerRepo.destroy({ where: { id } });
  }

  async getTokens(customerId: number): Promise<Tokens> {
    const jwtPayload: JwtPayloadForCustomer = {
      sub: customerId,
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
  ): Promise<Customer> {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 7);
    await this.customerRepo.update(
      { hashed_refresh_token: hashedRefreshToken },
      {
        where: {
          id,
        },
      },
    );

    return await this.customerRepo.findOne({ where: { id } });
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
