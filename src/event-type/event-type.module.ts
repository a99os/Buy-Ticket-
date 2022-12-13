import { Module } from '@nestjs/common';
import { EventTypeService } from './event-type.service';
import { EventTypeController } from './event-type.controller';

@Module({
  controllers: [EventTypeController],
  providers: [EventTypeService]
})
export class EventTypeModule {}
