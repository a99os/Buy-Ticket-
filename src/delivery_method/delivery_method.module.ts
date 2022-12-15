import { Module } from '@nestjs/common';
import { Delivery_MethodService } from './delivery_method.service';
import { Delivery_MethodController } from './delivery_method.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Delivery_Method } from './model/delivery_method.model';

@Module({
  imports: [SequelizeModule.forFeature([Delivery_Method])],

  controllers: [Delivery_MethodController],
  providers: [Delivery_MethodService],
})
export class DeliveryMethodModule {}
