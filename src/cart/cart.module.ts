import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from './model/cart.model';
import { Booking } from '../booking/model/booking.model';
import { Payment_Method } from '../payment_method/model/payment_method.model';
import { Delivery_Method } from '../delivery_method/model/delivery_method.model';
import { Discount_Coupon } from '../discount_coupon/model/discount_coupon.model';
import { Status } from '../status/model/status.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({}),
    SequelizeModule.forFeature([
      Booking,
      Cart,
      Payment_Method,
      Delivery_Method,
      Discount_Coupon,
      Status,
    ]),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
