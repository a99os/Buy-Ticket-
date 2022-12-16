import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from './seat.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Seat } from './model/seat.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({}), SequelizeModule.forFeature([Seat])],

  controllers: [SeatController],
  providers: [SeatService],
})
export class SeatModule {}
