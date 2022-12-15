import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './model/gender.model';
@Injectable()
export class GenderService {
  constructor(@InjectModel(Gender) private genderRepository: typeof Gender) {}
  create(createGenderDto: CreateGenderDto) {
    return this.genderRepository.create(createGenderDto);
  }

  findAll() {
    return this.genderRepository.findAll();
  }

  async findOne(id: number) {
    const gender = await this.genderRepository.findOne({ where: { id } });
    if (!gender) {
      throw new HttpException('Bunday gender topilmadi', HttpStatus.NOT_FOUND);
    }
    return gender;
  }

  async update(id: number, updateGenderDto: UpdateGenderDto) {
    const gender = await this.genderRepository.findOne({ where: { id } });
    if (!gender) {
      throw new HttpException('Bunday gender topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.genderRepository.update(updateGenderDto, { where: { id } });
  }

  async remove(id: number) {
    const gender = await this.genderRepository.findOne({ where: { id } });
    if (!gender) {
      throw new HttpException('Bunday gender topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.genderRepository.destroy({ where: { id } });
  }
}
