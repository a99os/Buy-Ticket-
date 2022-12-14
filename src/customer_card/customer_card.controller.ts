import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerCardService } from './customer_card.service';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';

@Controller('customer_card')
export class CustomerCardController {
  constructor(private readonly customer_cardService: CustomerCardService) {}

  @Post()
  create(@Body() createCustomer_CardDto: CreateCustomerCardDto) {
    return this.customer_cardService.create(createCustomer_CardDto);
  }

  @Get()
  findAll() {
    return this.customer_cardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customer_cardService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomer_CardDto: UpdateCustomerCardDto,
  ) {
    await this.customer_cardService.update(+id, updateCustomer_CardDto);
    return this.customer_cardService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const customer_card = await this.customer_cardService.findOne(+id);
    await this.customer_cardService.remove(+id);
    return customer_card;
  }
}
