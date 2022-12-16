import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';

import { ApiTags } from '@nestjs/swagger';
import { AdminGuard } from '../common/guards/admin.guard';

@ApiTags('Seat')
@Controller('seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createSeatDto: CreateSeatDto) {
    return this.seatService.create(createSeatDto);
  }

  @Get()
  findAll() {
    return this.seatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatService.findOne(+id);
  }
  @UseGuards(AdminGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSeatDto: UpdateSeatDto) {
    await this.seatService.update(+id, updateSeatDto);
    return this.seatService.findOne(+id);
  }
  @UseGuards(AdminGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const seat = await this.seatService.findOne(+id);
    await this.seatService.remove(+id);
    return seat;
  }
}
