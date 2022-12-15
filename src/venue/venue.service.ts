import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VenueTypeService } from '../venue_type/venue_type.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { Venue } from './model/venude.model';
@Injectable()
export class VenueService {
  constructor(
    @InjectModel(Venue) private venueRepository: typeof Venue,
    private readonly venueTypeService: VenueTypeService,
  ) {}
  async create(createVenueDto: CreateVenueDto) {
    const newVenue = await this.venueRepository.create(createVenueDto);
    let type;

    for (const id of createVenueDto.venue_type) {
      type = await this.venueTypeService.findOne(id);
      if (!type) {
        throw new HttpException(
          "Bunday id da type yo'q, id=" + id,
          HttpStatus.NOT_FOUND,
        );
      }
      await newVenue.$add('venue_type', [id]);
      await newVenue.save();
    }
    return await this.venueRepository.findByPk(newVenue.id, {
      include: { all: true },
    });
  }

  findAll() {
    return this.venueRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    try {
      const venue = await this.venueRepository.findOne({
        where: { id },
        include: { all: true },
      });
      if (!venue) {
        throw new HttpException('Bunday venue topilmadi', HttpStatus.NOT_FOUND);
      }
      return venue;
    } catch (error) {}
  }

  async update(id: number, updateVenueDto: UpdateVenueDto) {
    const venue = await this.venueRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!venue) {
      throw new HttpException('Bunday venue topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.venueRepository.update(updateVenueDto, {
      where: { id },
      returning: true,
    });

    const newVenue = await this.venueRepository.findOne({
      where: { id },
    });
    if (updateVenueDto.venue_type) {
      let type;
      for (const id of updateVenueDto.venue_type) {
        type = await this.venueTypeService.findOne(id);
        if (!type) {
          throw new HttpException(
            "Bunday id da type yo'q, id=" + id,
            HttpStatus.NOT_FOUND,
          );
        }
      }
      await newVenue.$set('venue_types', updateVenueDto.venue_type);
      await newVenue.save();
    }
    return await this.venueRepository.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async remove(id: number) {
    const venue = await this.venueRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!venue) {
      throw new HttpException('Bunday venue topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.venueRepository.destroy({ where: { id } });
  }
}
