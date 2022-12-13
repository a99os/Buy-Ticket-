import { Injectable } from '@nestjs/common';
import { CreateSeatTypeDto } from './dto/create-seat-type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat-type.dto';

@Injectable()
export class SeatTypeService {
  create(createSeatTypeDto: CreateSeatTypeDto) {
    return 'This action adds a new seatType';
  }

  findAll() {
    return `This action returns all seatType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seatType`;
  }

  update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    return `This action updates a #${id} seatType`;
  }

  remove(id: number) {
    return `This action removes a #${id} seatType`;
  }
}
