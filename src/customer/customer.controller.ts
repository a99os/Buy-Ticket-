import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { cookieGetterCustomer } from '../common/decorator/getCustomerRefreshToken.decorator';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import {
  LoginCustomerDto,
  UpdateCustomerDto,
  UpdatePasswordDto,
} from './dto/update-customer.dto';

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

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateCustomerDto: UpdateCustomerDto,
    @Res({ passthrough: true })
    res: Response,
  ) {
    return this.customerService.update(+id, updateCustomerDto, res);
  }
  @Put('password/:id')
  updatePassword(
    @Param('id') id: number,
    @Body() updatePasswordDto: UpdatePasswordDto,
    @Res({ passthrough: true })
    res: Response,
  ) {
    return this.customerService.updatePassword(+id, updatePasswordDto);
  }

  @Get()
  findAll() {
    return this.customerService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.getOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const customer = await this.customerService.getOne(+id);
    await this.customerService.delete(+id);
    return customer;
  }
}
