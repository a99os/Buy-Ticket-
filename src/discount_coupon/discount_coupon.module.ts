import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Discount_CouponController } from './discount_coupon.controller';
import { Discount_CouponService } from './discount_coupon.service';
import { Discount_Coupon } from './model/discount_coupon.model';

@Module({
  imports: [SequelizeModule.forFeature([Discount_Coupon])],

  controllers: [Discount_CouponController],
  providers: [Discount_CouponService],
})
export class DiscountCouponModule {}
