import { Module } from '@nestjs/common';
import { Delivery_MethodService } from './delivery_method.service';
import { Delivery_MethodController } from './delivery_method.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Delivery_Method } from './model/delivery_method.model';
import { Booking } from '../booking/model/booking.model';
import { Cart } from '../cart/model/cart.model';
import { Payment_Method } from '../payment_method/model/payment_method.model';
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

  controllers: [Delivery_MethodController],
  providers: [Delivery_MethodService],
})
export class DeliveryMethodModule {}
