import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Payment_MethodController } from './payment_method.controller';
import { Payment_MethodService } from './payment_method.service';
import { Payment_Method } from './model/payment_method.model';

@Module({
  imports: [SequelizeModule.forFeature([Payment_Method])],

  controllers: [Payment_MethodController],
  providers: [Payment_MethodService],
})
export class PaymentMethodModule {}
