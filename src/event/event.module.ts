import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './model/event.model';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [FilesModule, SequelizeModule.forFeature([Event])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
