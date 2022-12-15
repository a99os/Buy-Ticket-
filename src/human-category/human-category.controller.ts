import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { HumanCategoryService } from './human-category.service';
import { CreateHumanCategoryDto } from './dto/create-human-category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human-category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('human_category')
@Controller('human_category')
export class HumanCategoryController {
  constructor(private readonly human_categoryService: HumanCategoryService) {}

  @Post()
  create(@Body() createHuman_CategoryDto: CreateHumanCategoryDto) {
    return this.human_categoryService.create(createHuman_CategoryDto);
  }

  @Get()
  findAll() {
    return this.human_categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.human_categoryService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateHumanCategoryDto: UpdateHumanCategoryDto,
  ) {
    await this.human_categoryService.update(+id, updateHumanCategoryDto);
    return this.human_categoryService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const human_category = await this.human_categoryService.findOne(+id);
    await this.human_categoryService.remove(+id);
    return human_category;
  }
}
