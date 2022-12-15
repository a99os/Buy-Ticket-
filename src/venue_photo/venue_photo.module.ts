import { Module } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { VenuePhotoController } from './venue_photo.controller';
import { Venue_Photo } from './model/venue_photo.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [FilesModule, SequelizeModule.forFeature([Venue_Photo])],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService],
})
export class VenuePhotoModule {}
