import { Module } from '@nestjs/common';
import { EventTypeService } from './event-type.service';
import { EventTypeController } from './event-type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event_Type } from './model/event_type.model';

@Module({
  imports: [SequelizeModule.forFeature([Event_Type])],
  controllers: [EventTypeController],
  providers: [EventTypeService],
})
export class EventTypeModule {}
