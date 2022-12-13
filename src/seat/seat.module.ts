import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from './seat.controller';

@Module({
  controllers: [SeatController],
  providers: [SeatService]
})
export class SeatModule {}
