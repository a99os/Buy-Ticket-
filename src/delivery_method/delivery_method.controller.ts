import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Delivery_MethodService } from './delivery_method.service';
import { CreateDelivery_MethodDto } from './dto/create-delivery_method.dto';
import { UpdateDelivery_MethodDto } from './dto/update-delivery_method.dto';
@Controller('delivery_method')
export class Delivery_MethodController {
  constructor(private readonly delivery_methodService: Delivery_MethodService) {}

  @Post()
  create(@Body() createDelivery_MethodDto: CreateDelivery_MethodDto) {
    return this.delivery_methodService.create(createDelivery_MethodDto);
  }

  @Get()
  findAll() {
    return this.delivery_methodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.delivery_methodService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDelivery_MethodDto: UpdateDelivery_MethodDto) {
    await this.delivery_methodService.update(+id, updateDelivery_MethodDto);
    return this.delivery_methodService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const delivery_method = await this.delivery_methodService.findOne(+id);
    await this.delivery_methodService.remove(+id);
    return delivery_method;
  }
}
