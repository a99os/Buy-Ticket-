import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Payment_MethodController } from './payment_method.controller';
import { Payment_MethodService } from './payment_method.service';
import { Payment_Method } from './model/payment_method.model';
import { Booking } from '../booking/model/booking.model';
import { Cart } from '../cart/model/cart.model';
import { Delivery_Method } from '../delivery_method/model/delivery_method.model';
import { Discount_Coupon } from '../discount_coupon/model/discount_coupon.model';
import { Status } from '../status/model/status.model';

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

  controllers: [Payment_MethodController],
  providers: [Payment_MethodService],
})
export class PaymentMethodModule {}
