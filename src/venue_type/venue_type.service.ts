import { Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';

@Injectable()
export class VenueTypeService {
  create(createVenueTypeDto: CreateVenueTypeDto) {
    return 'This action adds a new venueType';
  }

  findAll() {
    return `This action returns all venueType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} venueType`;
  }

  update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    return `This action updates a #${id} venueType`;
  }

  remove(id: number) {
    return `This action removes a #${id} venueType`;
  }
}
