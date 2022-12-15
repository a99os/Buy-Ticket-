import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './model/seat.model';
@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seatRepository: typeof Seat) {}
  create(createSeatDto: CreateSeatDto) {
    return this.seatRepository.create(createSeatDto);
  }

  findAll() {
    return this.seatRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const seat = await this.seatRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!seat) {
      throw new HttpException('Bunday seat topilmadi', HttpStatus.NOT_FOUND);
    }
    return seat;
  }

  async update(id: number, updateSeatDto: UpdateSeatDto) {
    const seat = await this.seatRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!seat) {
      throw new HttpException('Bunday seat topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.seatRepository.update(updateSeatDto, { where: { id } });
  }

  async remove(id: number) {
    const seat = await this.seatRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!seat) {
      throw new HttpException('Bunday seat topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.seatRepository.destroy({ where: { id } });
  }
}
