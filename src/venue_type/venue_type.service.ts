import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { Venue_Type } from './model/venue_type.model';
@Injectable()
export class VenueTypeService {
  constructor(
    @InjectModel(Venue_Type) private venue_typeRepository: typeof Venue_Type,
  ) {}
  create(createVenue_TypeDto: CreateVenueTypeDto) {
    return this.venue_typeRepository.create(createVenue_TypeDto);
  }

  findAll() {
    return this.venue_typeRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const venue_type = await this.venue_typeRepository.findOne({
      where: { id },
    });
    if (!venue_type) {
      throw new HttpException(
        'Bunday venue_type topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return venue_type;
  }

  async update(id: number, updateVenue_TypeDto: UpdateVenueTypeDto) {
    const venue_type = await this.venue_typeRepository.findOne({
      where: { id },
    });
    if (!venue_type) {
      throw new HttpException(
        'Bunday venue_type topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.venue_typeRepository.update(updateVenue_TypeDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    const venue_type = await this.venue_typeRepository.findOne({
      where: { id },
    });
    if (!venue_type) {
      throw new HttpException(
        'Bunday venue_type topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.venue_typeRepository.destroy({ where: { id } });
  }
}
