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
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { cookieGetterCustomer } from '../common/decorator/getCustomerRefreshToken.decorator';
import { AdminGuard } from '../common/guards/admin.guard';
import { SelfGuard } from '../common/guards/self.guard';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import {
  LoginCustomerDto,
  UpdateCustomerDto,
  UpdatePasswordDto,
} from './dto/update-customer.dto';
@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Post('/register')
  register(
    @Body() createCustomerDto: CreateCustomerDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.customerService.register(createCustomerDto, res);
  }
  @Post('/login')
  login(
    @Body() loginCustomerDto: LoginCustomerDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.customerService.login(loginCustomerDto, res);
  }
  @Post('/refresh')
  refresh(
    @cookieGetterCustomer() refresh_token: string,
    @Res({ passthrough: true })
    res: Response,
  ) {
    return this.customerService.refreshTokens(refresh_token, res);
  }
  @Post('/logout')
  logout(
    @cookieGetterCustomer() refresh_token: string,
    @Res({ passthrough: true })
    res: Response,
  ) {
    return this.customerService.logout(refresh_token, res);
  }
  @UseGuards(SelfGuard)
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateCustomerDto: UpdateCustomerDto,
    @Res({ passthrough: true })
    res: Response,
  ) {
    return this.customerService.update(+id, updateCustomerDto, res);
  }
  @UseGuards(SelfGuard)
  @Put('password/:id')
  updatePassword(
    @Param('id') id: number,
    @Body() updatePasswordDto: UpdatePasswordDto,
    @Res({ passthrough: true })
    res: Response,
  ) {
    return this.customerService.updatePassword(+id, updatePasswordDto);
  }
  @UseGuards(AdminGuard)
  @Get()
  findAll() {
    return this.customerService.getAll();
  }

  @UseGuards(AdminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.getOne(+id);
  }
  @UseGuards(SelfGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const customer = await this.customerService.getOne(+id);
    await this.customerService.delete(+id);
    return customer;
  }
}
