import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from '../files/files.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './model/event.model';
@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event) private eventRepository: typeof Event,
    private readonly fileService: FilesService,
  ) {}
  async create(createEventDto: CreateEventDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const data = await this.eventRepository.create({
      ...createEventDto,
      photo: fileName,
    });
    return data;
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

  async update(id: number, updateEventDto: UpdateEventDto, image: any) {
    const event = await this.eventRepository.findOne({ where: { id } });
    if (!event) {
      throw new HttpException('Bunday event topilmadi', HttpStatus.NOT_FOUND);
    }
    if (image) {
      await this.fileService.deleteFile(event.photo);
      event.photo = await this.fileService.createFile(image);
      await event.save();
    }

    return await this.eventRepository.update(updateEventDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    const event = await this.eventRepository.findOne({ where: { id } });
    if (!event) {
      throw new HttpException('Bunday event topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.fileService.deleteFile(event.photo);

    return this.eventRepository.destroy({ where: { id } });
  }
}
