import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { LangService } from './lang.service';
import { CreateLangDto } from './dto/create-lang.dto';
import { UpdateLangDto } from './dto/update-lang.dto';
@Controller('lang')
export class LangController {
  constructor(private readonly langService: LangService) {}

  @Post()
  create(@Body() createLangDto: CreateLangDto) {
    return this.langService.create(createLangDto);
  }

  @Get()
  findAll() {
    return this.langService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.langService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateLangDto: UpdateLangDto) {
    await this.langService.update(+id, updateLangDto);
    return this.langService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const lang = await this.langService.findOne(+id);
    await this.langService.remove(+id);
    return lang;
  }
}
