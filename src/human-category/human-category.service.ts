import { Injectable } from '@nestjs/common';
import { CreateHumanCategoryDto } from './dto/create-human-category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human-category.dto';

@Injectable()
export class HumanCategoryService {
  create(createHumanCategoryDto: CreateHumanCategoryDto) {
    return 'This action adds a new humanCategory';
  }

  findAll() {
    return `This action returns all humanCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} humanCategory`;
  }

  update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    return `This action updates a #${id} humanCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} humanCategory`;
  }
}
