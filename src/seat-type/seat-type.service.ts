import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSeatTypeDto } from './dto/create-seat-type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat-type.dto';
import { Seat_Type } from './model/seat-type.model';
@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(Seat_Type) private seat_typeRepository: typeof Seat_Type) {}
  create(createSeat_TypeDto: CreateSeatTypeDto) {
    return this.seat_typeRepository.create(createSeat_TypeDto);
  }

  findAll() {
    return this.seat_typeRepository.findAll();
  }

  async findOne(id: number) {
    const seat_type = await this.seat_typeRepository.findOne({ where: { id } });
    if (!seat_type) {
      throw new HttpException('Bunday seat_type topilmadi', HttpStatus.NOT_FOUND);
    }
    return seat_type;
  }

  async update(id: number, updateSeat_TypeDto: UpdateSeatTypeDto) {
    const seat_type = await this.seat_typeRepository.findOne({ where: { id } });
    if (!seat_type) {
      throw new HttpException('Bunday seat_type topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.seat_typeRepository.update(updateSeat_TypeDto, { where: { id } });
  }

  async remove(id: number) {
    const seat_type = await this.seat_typeRepository.findOne({ where: { id } });
    if (!seat_type) {
      throw new HttpException('Bunday seat_type topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.seat_typeRepository.destroy({ where: { id } });
  }
}
