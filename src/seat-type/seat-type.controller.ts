import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SeatTypeService } from './seat-type.service';
import { CreateSeatTypeDto } from './dto/create-seat-type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Seat_type')
@Controller('seat_type')
export class SeatTypeController {
  constructor(private readonly seat_typeService: SeatTypeService) {}

  @Post()
  create(@Body() createSeat_TypeDto: CreateSeatTypeDto) {
    return this.seat_typeService.create(createSeat_TypeDto);
  }

  @Get()
  findAll() {
    return this.seat_typeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seat_typeService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSeatTypeDto: UpdateSeatTypeDto,
  ) {
    await this.seat_typeService.update(+id, updateSeatTypeDto);
    return this.seat_typeService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const seat_type = await this.seat_typeService.findOne(+id);
    await this.seat_typeService.remove(+id);
    return seat_type;
  }
}
