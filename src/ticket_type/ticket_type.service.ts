import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTicket_TypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicket_TypeDto } from './dto/update-ticket_type.dto';
import { Ticket_Type } from './model/ticket_type.model';
@Injectable()
export class Ticket_TypeService {
  constructor(
    @InjectModel(Ticket_Type) private ticket_typeRepository: typeof Ticket_Type,
  ) {}
  create(createTicket_TypeDto: CreateTicket_TypeDto) {
    return this.ticket_typeRepository.create(createTicket_TypeDto);
  }

  findAll() {
    return this.ticket_typeRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const ticket_type = await this.ticket_typeRepository.findOne({
      where: { id },
    });
    if (!ticket_type) {
      throw new HttpException(
        'Bunday ticket_type topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return ticket_type;
  }

  async update(id: number, updateTicket_TypeDto: UpdateTicket_TypeDto) {
    const ticket_type = await this.ticket_typeRepository.findOne({
      where: { id },
    });
    if (!ticket_type) {
      throw new HttpException(
        'Bunday ticket_type topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.ticket_typeRepository.update(updateTicket_TypeDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    const ticket_type = await this.ticket_typeRepository.findOne({
      where: { id },
    });
    if (!ticket_type) {
      throw new HttpException(
        'Bunday ticket_type topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.ticket_typeRepository.destroy({ where: { id } });
  }
}
