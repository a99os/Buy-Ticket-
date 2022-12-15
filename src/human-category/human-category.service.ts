import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateHumanCategoryDto } from './dto/create-human-category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human-category.dto';
import { Human_Category } from './model/human-category.model';
@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(Human_Category)
    private human_categoryRepository: typeof Human_Category,
  ) {}
  create(createHuman_CategoryDto: CreateHumanCategoryDto) {
    return this.human_categoryRepository.create(createHuman_CategoryDto);
  }

  findAll() {
    return this.human_categoryRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const human_category = await this.human_categoryRepository.findOne({
      where: { id },
    });
    if (!human_category) {
      throw new HttpException(
        'Bunday human_category topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return human_category;
  }

  async update(id: number, updateHuman_CategoryDto: UpdateHumanCategoryDto) {
    const human_category = await this.human_categoryRepository.findOne({
      where: { id },
    });
    if (!human_category) {
      throw new HttpException(
        'Bunday human_category topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.human_categoryRepository.update(updateHuman_CategoryDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    const human_category = await this.human_categoryRepository.findOne({
      where: { id },
    });
    if (!human_category) {
      throw new HttpException(
        'Bunday human_category topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.human_categoryRepository.destroy({ where: { id } });
  }
}
