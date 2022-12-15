import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventTypeDto } from './dto/create-event-type.dto';
import { UpdateEventTypeDto } from './dto/update-event-type.dto';
import { Event_Type } from './model/event_type.model';
@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(Event_Type) private event_typeRepository: typeof Event_Type,
  ) {}
  create(createEvent_TypeDto: CreateEventTypeDto) {
    return this.event_typeRepository.create(createEvent_TypeDto);
  }

  findAll() {
    return this.event_typeRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const event_type = await this.event_typeRepository.findOne({
      where: { id },
    });
    if (!event_type) {
      throw new HttpException(
        'Bunday event_type topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return event_type;
  }

  async update(id: number, updateEvent_TypeDto: UpdateEventTypeDto) {
    const event_type = await this.event_typeRepository.findOne({
      where: { id },
    });
    if (!event_type) {
      throw new HttpException(
        'Bunday event_type topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.event_typeRepository.update(updateEvent_TypeDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    const event_type = await this.event_typeRepository.findOne({
      where: { id },
    });
    if (!event_type) {
      throw new HttpException(
        'Bunday event_type topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.event_typeRepository.destroy({ where: { id } });
  }
}
