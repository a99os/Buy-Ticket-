import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './model/booking.model';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking) private bookingRepository: typeof Booking,
  ) {}
  create(createBookingDto: CreateBookingDto) {
    return this.bookingRepository.create(createBookingDto);
  }

  findAll() {
    return this.bookingRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const booking = await this.bookingRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!booking) {
      throw new HttpException('Bunday booking topilmadi', HttpStatus.NOT_FOUND);
    }
    return booking;
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const booking = await this.bookingRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!booking) {
      throw new HttpException('Bunday booking topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.bookingRepository.update(updateBookingDto, { where: { id } });
  }

  async remove(id: number) {
    const booking = await this.bookingRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!booking) {
      throw new HttpException('Bunday booking topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.bookingRepository.destroy({ where: { id } });
  }
}
