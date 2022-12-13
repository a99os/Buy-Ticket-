import { Injectable } from '@nestjs/common';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';

@Injectable()
export class VenuePhotoService {
  create(createVenuePhotoDto: CreateVenuePhotoDto) {
    return 'This action adds a new venuePhoto';
  }

  findAll() {
    return `This action returns all venuePhoto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} venuePhoto`;
  }

  update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return `This action updates a #${id} venuePhoto`;
  }

  remove(id: number) {
    return `This action removes a #${id} venuePhoto`;
  }
}
