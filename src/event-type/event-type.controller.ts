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
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Event_Type')
@Controller('event_type')
export class EventTypeController {
  constructor(private readonly event_typeService: EventTypeService) {}

  @Post()
  create(@Body() createEvent_TypeDto: CreateEventTypeDto) {
    return this.event_typeService.create(createEvent_TypeDto);
  }

  @Get()
  findAll() {
    return this.event_typeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.event_typeService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEvent_TypeDto: UpdateEventTypeDto,
  ) {
    await this.event_typeService.update(+id, updateEvent_TypeDto);
    return this.event_typeService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const event_type = await this.event_typeService.findOne(+id);
    await this.event_typeService.remove(+id);
    return event_type;
  }
}
