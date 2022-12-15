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
import { ApiTags } from '@nestjs/swagger';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { CustomerGuard } from '../common/guards/customer.guard';
@ApiTags('Booking')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @UseGuards(CustomerGuard)
  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }
  @UseGuards(CustomerGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookingDto: UpdateBookingDto,
  ) {
    await this.bookingService.update(+id, updateBookingDto);
    return this.bookingService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const booking = await this.bookingService.findOne(+id);
    await this.bookingService.remove(+id);
    return booking;
  }
}
