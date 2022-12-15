import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Ticket')
@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    await this.ticketService.update(+id, updateTicketDto);
    return this.ticketService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const ticket = await this.ticketService.findOne(+id);
    await this.ticketService.remove(+id);
    return ticket;
  }
}
