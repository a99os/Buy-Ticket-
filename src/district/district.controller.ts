import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @Post()
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto);
  }

  @Get()
  findAll() {
    return this.districtService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.districtService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDistrictDto: UpdateDistrictDto) {
    await this.districtService.update(+id, updateDistrictDto);
    return this.districtService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const district = await this.districtService.findOne(+id);
    await this.districtService.remove(+id);
    return district;
  }
}
