import { Module } from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { VenueTypeController } from './venue_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Venue_Type } from './model/venue_type.model';
import { Venue } from '../venue/model/venude.model';
import { Pipe } from './model/pipe.model';

@Module({
  imports: [SequelizeModule.forFeature([Venue_Type, Venue, Pipe])],
  controllers: [VenueTypeController],
  providers: [VenueTypeService],
  exports: [VenueTypeService],
})
export class VenueTypeModule {}
