import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Discount_CouponService } from './discount_coupon.service';
import { CreateDiscount_CouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscount_CouponDto } from './dto/update-discount_coupon.dto';

@Controller('discount_coupon')
export class Discount_CouponController {
  constructor(private readonly discount_couponService: Discount_CouponService) {}

  @Post()
  create(@Body() createDiscount_CouponDto: CreateDiscount_CouponDto) {
    return this.discount_couponService.create(createDiscount_CouponDto);
  }

  @Get()
  findAll() {
    return this.discount_couponService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discount_couponService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDiscount_CouponDto: UpdateDiscount_CouponDto) {
    await this.discount_couponService.update(+id, updateDiscount_CouponDto);
    return this.discount_couponService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const discount_coupon = await this.discount_couponService.findOne(+id);
    await this.discount_couponService.remove(+id);
    return discount_coupon;
  }
}
