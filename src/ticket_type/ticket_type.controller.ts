import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Ticket_TypeService } from './ticket_type.service';
import { CreateTicket_TypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicket_TypeDto } from './dto/update-ticket_type.dto';
@Controller('ticket_type')
export class Ticket_TypeController {
  constructor(private readonly ticket_typeService: Ticket_TypeService) {}

  @Post()
  create(@Body() createTicket_TypeDto: CreateTicket_TypeDto) {
    return this.ticket_typeService.create(createTicket_TypeDto);
  }

  @Get()
  findAll() {
    return this.ticket_typeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticket_typeService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTicket_TypeDto: UpdateTicket_TypeDto) {
    await this.ticket_typeService.update(+id, updateTicket_TypeDto);
    return this.ticket_typeService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const ticket_type = await this.ticket_typeService.findOne(+id);
    await this.ticket_typeService.remove(+id);
    return ticket_type;
  }
}
