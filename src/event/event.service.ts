import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './model/event.model';
@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private eventRepository: typeof Event) {}
  create(createEventDto: CreateEventDto) {
    return this.eventRepository.create(createEventDto);
  }

  findAll() {
    return this.eventRepository.findAll();
  }

  async findOne(id: number) {
    const event = await this.eventRepository.findOne({ where: { id } });
    if (!event) {
      throw new HttpException('Bunday event topilmadi', HttpStatus.NOT_FOUND);
    }
    return event;
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const event = await this.eventRepository.findOne({ where: { id } });
    if (!event) {
      throw new HttpException('Bunday event topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.eventRepository.update(updateEventDto, { where: { id } });
  }

  async remove(id: number) {
    const event = await this.eventRepository.findOne({ where: { id } });
    if (!event) {
      throw new HttpException('Bunday event topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.eventRepository.destroy({ where: { id } });
  }
}
