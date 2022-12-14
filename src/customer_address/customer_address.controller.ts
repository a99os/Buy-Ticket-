import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { CreateCustomer_AddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomer_AddressDto } from './dto/update-customer_address.dto';

@Controller('customer_address')
export class Customer_AddressController {
  constructor(
    private readonly customer_addressService: CustomerAddressService,
  ) {}

  @Post()
  create(@Body() createCustomer_AddressDto: CreateCustomer_AddressDto) {
    return this.customer_addressService.create(createCustomer_AddressDto);
  }

  @Get()
  findAll() {
    return this.customer_addressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customer_addressService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomer_AddressDto: UpdateCustomer_AddressDto,
  ) {
    await this.customer_addressService.update(+id, updateCustomer_AddressDto);
    return this.customer_addressService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const customer_address = await this.customer_addressService.findOne(+id);
    await this.customer_addressService.remove(+id);
    return customer_address;
  }
}
