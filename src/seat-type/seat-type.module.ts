import { Module } from '@nestjs/common';
import { SeatTypeService } from './seat-type.service';
import { SeatTypeController } from './seat-type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Seat_Type } from './model/seat-type.model';

@Module({
  imports: [SequelizeModule.forFeature([Seat_Type])],
  controllers: [SeatTypeController],
  providers: [SeatTypeService],
})
export class SeatTypeModule {}
