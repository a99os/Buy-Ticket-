import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Booking } from '../booking/model/booking.model';
import { Cart } from '../cart/model/cart.model';
import { Delivery_Method } from '../delivery_method/model/delivery_method.model';
import { Payment_Method } from '../payment_method/model/payment_method.model';
import { Status } from '../status/model/status.model';
import { Discount_CouponController } from './discount_coupon.controller';
import { Discount_CouponService } from './discount_coupon.service';
import { Discount_Coupon } from './model/discount_coupon.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Booking,
      Cart,
      Payment_Method,
      Delivery_Method,
      Discount_Coupon,
      Status,
    ]),
  ],

  controllers: [Discount_CouponController],
  providers: [Discount_CouponService],
  // exports: [Discount_Coupon],
})
export class DiscountCouponModule {}
