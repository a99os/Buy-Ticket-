import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Status } from './model/status.model';
import { Booking } from '../booking/model/booking.model';
import { Cart } from '../cart/model/cart.model';
import { Payment_Method } from '../payment_method/model/payment_method.model';
import { Delivery_Method } from '../delivery_method/model/delivery_method.model';
import { Discount_Coupon } from '../discount_coupon/model/discount_coupon.model';

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

  controllers: [StatusController],
  providers: [StatusService],
})
export class StatusModule {}
