import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLangDto } from './dto/create-lang.dto';
import { UpdateLangDto } from './dto/update-lang.dto';
import { Lang } from './model/lang.model';
@Injectable()
export class LangService {
  constructor(@InjectModel(Lang) private langRepository: typeof Lang) {}
  create(createLangDto: CreateLangDto) {
    return this.langRepository.create(createLangDto);
  }

  findAll() {
    return this.langRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const lang = await this.langRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!lang) {
      throw new HttpException('Bunday lang topilmadi', HttpStatus.NOT_FOUND);
    }
    return lang;
  }

  async update(id: number, updateLangDto: UpdateLangDto) {
    const lang = await this.langRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!lang) {
      throw new HttpException('Bunday lang topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.langRepository.update(updateLangDto, { where: { id } });
  }

  async remove(id: number) {
    const lang = await this.langRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!lang) {
      throw new HttpException('Bunday lang topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.langRepository.destroy({ where: { id } });
  }
}
