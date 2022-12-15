import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './model/status.model';
@Injectable()
export class StatusService {
  constructor(@InjectModel(Status) private statusRepository: typeof Status) {}
  create(createStatusDto: CreateStatusDto) {
    return this.statusRepository.create(createStatusDto);
  }

  findAll() {
    return this.statusRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const status = await this.statusRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!status) {
      throw new HttpException('Bunday status topilmadi', HttpStatus.NOT_FOUND);
    }
    return status;
  }

  async update(id: number, updateStatusDto: UpdateStatusDto) {
    const status = await this.statusRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!status) {
      throw new HttpException('Bunday status topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.statusRepository.update(updateStatusDto, { where: { id } });
  }

  async remove(id: number) {
    const status = await this.statusRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!status) {
      throw new HttpException('Bunday status topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.statusRepository.destroy({ where: { id } });
  }
}
