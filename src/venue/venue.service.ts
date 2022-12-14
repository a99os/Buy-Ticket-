import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { Venue } from './model/venude.model';
@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private venueRepository: typeof Venue) {}
  create(createVenueDto: CreateVenueDto) {
    return this.venueRepository.create(createVenueDto);
  }

  findAll() {
    return this.venueRepository.findAll();
  }

  async findOne(id: number) {
    const venue = await this.venueRepository.findOne({ where: { id } });
    if (!venue) {
      throw new HttpException('Bunday venue topilmadi', HttpStatus.NOT_FOUND);
    }
    return venue;
  }

  async update(id: number, updateVenueDto: UpdateVenueDto) {
    const venue = await this.venueRepository.findOne({ where: { id } });
    if (!venue) {
      throw new HttpException('Bunday venue topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.venueRepository.update(updateVenueDto, { where: { id } });
  }

  async remove(id: number) {
    const venue = await this.venueRepository.findOne({ where: { id } });
    if (!venue) {
      throw new HttpException('Bunday venue topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.venueRepository.destroy({ where: { id } });
  }
}
