import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDiscount_CouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscount_CouponDto } from './dto/update-discount_coupon.dto';
import { Discount_Coupon } from './model/discount_coupon.model';

@Injectable()
export class Discount_CouponService {
  constructor(
    @InjectModel(Discount_Coupon)
    private discount_couponRepository: typeof Discount_Coupon,
  ) {}
  create(createDiscount_CouponDto: CreateDiscount_CouponDto) {
    return this.discount_couponRepository.create(createDiscount_CouponDto);
  }

  findAll() {
    return this.discount_couponRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const discount_coupon = await this.discount_couponRepository.findOne({
      where: { id },
    });
    if (!discount_coupon) {
      throw new HttpException(
        'Bunday discount_coupon topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return discount_coupon;
  }

  async update(id: number, updateDiscount_CouponDto: UpdateDiscount_CouponDto) {
    const discount_coupon = await this.discount_couponRepository.findOne({
      where: { id },
    });
    if (!discount_coupon) {
      throw new HttpException(
        'Bunday discount_coupon topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.discount_couponRepository.update(updateDiscount_CouponDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    const discount_coupon = await this.discount_couponRepository.findOne({
      where: { id },
    });
    if (!discount_coupon) {
      throw new HttpException(
        'Bunday discount_coupon topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.discount_couponRepository.destroy({ where: { id } });
  }
}
