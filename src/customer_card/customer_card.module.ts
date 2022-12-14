import { Module } from '@nestjs/common';
import { CustomerCardService } from './customer_card.service';
import { CustomerCardController } from './customer_card.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer_Card } from './model/customer_card.model';

@Module({
  imports: [SequelizeModule.forFeature([Customer_Card])],

  controllers: [CustomerCardController],
  providers: [CustomerCardService],
})
export class CustomerCardModule {}
