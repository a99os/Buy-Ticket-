import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Booking } from './model/booking.model';
import { Cart } from '../cart/model/cart.model';
import { Delivery_Method } from '../delivery_method/model/delivery_method.model';
import { Discount_Coupon } from '../discount_coupon/model/discount_coupon.model';
import { Status } from '../status/model/status.model';
import { Payment_Method } from '../payment_method/model/payment_method.model';

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
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
