import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    await this.regionService.update(+id, updateRegionDto);
    return this.regionService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const region = await this.regionService.findOne(+id);
    await this.regionService.remove(+id);
    return region;
  }
}
