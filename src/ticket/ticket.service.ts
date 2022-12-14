import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './model/ticket.model';
@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket) private ticketRepository: typeof Ticket) {}
  create(createTicketDto: CreateTicketDto) {
    return this.ticketRepository.create(createTicketDto);
  }

  findAll() {
    return this.ticketRepository.findAll();
  }

  async findOne(id: number) {
    const ticket = await this.ticketRepository.findOne({ where: { id } });
    if (!ticket) {
      throw new HttpException('Bunday ticket topilmadi', HttpStatus.NOT_FOUND);
    }
    return ticket;
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    const ticket = await this.ticketRepository.findOne({ where: { id } });
    if (!ticket) {
      throw new HttpException('Bunday ticket topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.ticketRepository.update(updateTicketDto, { where: { id } });
  }

  async remove(id: number) {
    const ticket = await this.ticketRepository.findOne({ where: { id } });
    if (!ticket) {
      throw new HttpException('Bunday ticket topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.ticketRepository.destroy({ where: { id } });
  }
}
