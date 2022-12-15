import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { cookieGetterAdmin } from '../common/decorator/getAdminRefreshToken.decorator';
import { CreatorGuard } from '../common/guards/creatorAdmin.guard';
import { SelfGuard } from '../common/guards/self.guard';
import { AdminService } from './admin.service';
import { CreateAdminDto, LoginAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './model/admin.model';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: 'Admin yaratish' })
  @ApiResponse({ status: 201, type: Admin })
  @Post('/register')
  register(
    @Body() createAdminDto: CreateAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.register(createAdminDto, res);
  }
  @ApiOperation({ summary: 'Admin yaratish' })
  @ApiResponse({ status: 201, type: Admin })
  @Post('/login')
  login(
    @Body() loginAdminDto: LoginAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.login(loginAdminDto, res);
  }
  @Post('/refresh')
  refresh(
    @cookieGetterAdmin() refresh_token: string,
    @Res({ passthrough: true })
    res: Response,
  ) {
    return this.adminService.refreshTokens(refresh_token, res);
  }
  @Post('/logout')
  logout(
    @cookieGetterAdmin() refresh_token: string,
    @Res({ passthrough: true })
    res: Response,
  ) {
    return this.adminService.logout(refresh_token, res);
  }
  @UseGuards(CreatorGuard)
  @Post('/status-active/:id')
  status_active(
    @Param('id') id: number,
    @Res({ passthrough: true })
    res: Response,
  ) {
    return this.adminService.activeDeactivate(+id, res);
  }
  @UseGuards(CreatorGuard)
  @Post('/status-creator/:id')
  creator(
    @Param('id') id: number,
    @Res({ passthrough: true })
    res: Response,
  ) {
    return this.adminService.creator(+id, res);
  }
  @UseGuards(SelfGuard)
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateAdminDto: UpdateAdminDto,
    @Res({ passthrough: true })
    res: Response,
  ) {
    return this.adminService.update(+id, updateAdminDto, res);
  }

  @UseGuards(CreatorGuard)
  @Get()
  findAll() {
    return this.adminService.getAll();
  }
  @UseGuards(SelfGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.getOne(+id);
  }
  @UseGuards(SelfGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const admin = await this.adminService.getOne(+id);
    await this.adminService.delete(+id);
    return admin;
  }
}
