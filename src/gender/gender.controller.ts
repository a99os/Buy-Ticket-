import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { GenderService } from './gender.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @Post()
  create(@Body() createGenderDto: CreateGenderDto) {
    return this.genderService.create(createGenderDto);
  }

  @Get()
  findAll() {
    return this.genderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genderService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateGenderDto: UpdateGenderDto) {
    await this.genderService.update(+id, updateGenderDto);
    return this.genderService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const gender = await this.genderService.findOne(+id);
    await this.genderService.remove(+id);
    return gender;
  }
}
