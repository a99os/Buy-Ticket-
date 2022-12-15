import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueController } from './venue.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Venue } from './model/venude.model';
import { Venue_Type } from '../venue_type/model/venue_type.model';
import { Pipe } from '../venue_type/model/pipe.model';
import { VenueTypeModule } from '../venue_type/venue_type.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({}),
    SequelizeModule.forFeature([Venue, Venue_Type, Pipe]),
    VenueTypeModule,
  ],
  controllers: [VenueController],
  providers: [VenueService],
})
export class VenueModule {}
