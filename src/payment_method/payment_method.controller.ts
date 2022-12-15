import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Payment_MethodService } from './payment_method.service';
import { CreatePayment_MethodDto } from './dto/create-payment_method.dto';
import { UpdatePayment_MethodDto } from './dto/update-payment_method.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Payment_Method')
@Controller('payment_method')
export class Payment_MethodController {
  constructor(private readonly payment_methodService: Payment_MethodService) {}

  @Post()
  create(@Body() createPayment_MethodDto: CreatePayment_MethodDto) {
    return this.payment_methodService.create(createPayment_MethodDto);
  }

  @Get()
  findAll() {
    return this.payment_methodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payment_methodService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePayment_MethodDto: UpdatePayment_MethodDto,
  ) {
    await this.payment_methodService.update(+id, updatePayment_MethodDto);
    return this.payment_methodService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const payment_method = await this.payment_methodService.findOne(+id);
    await this.payment_methodService.remove(+id);
    return payment_method;
  }
}
