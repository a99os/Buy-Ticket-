import { Injectable } from '@nestjs/common';
import { CreateEventTypeDto } from './dto/create-event-type.dto';
import { UpdateEventTypeDto } from './dto/update-event-type.dto';

@Injectable()
export class EventTypeService {
  create(createEventTypeDto: CreateEventTypeDto) {
    return 'This action adds a new eventType';
  }

  findAll() {
    return `This action returns all eventType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventType`;
  }

  update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    return `This action updates a #${id} eventType`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventType`;
  }
}
