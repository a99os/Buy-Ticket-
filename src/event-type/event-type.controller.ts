import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { EventTypeService } from './event-type.service';
import { CreateEventTypeDto } from './dto/create-event-type.dto';
import { UpdateEventTypeDto } from './dto/update-event-type.dto';

@Controller('event-type')
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @Post()
  create(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @Get()
  findAll() {
    return this.eventTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventTypeService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEventTypeDto: UpdateEventTypeDto,
  ) {
    return this.eventTypeService.update(+id, updateEventTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventTypeService.remove(+id);
  }
}
