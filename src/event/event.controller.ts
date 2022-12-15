import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() createEventDto: CreateEventDto, @UploadedFile() image) {
    return this.eventService.create(createEventDto, image);
  }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
    @UploadedFile() image,
  ) {
    await this.eventService.update(+id, updateEventDto, image);
    return this.eventService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const event = await this.eventService.findOne(+id);
    await this.eventService.remove(+id);
    return event;
  }
}
