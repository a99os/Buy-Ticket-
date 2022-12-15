import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
@ApiTags('Country')
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }

  @Get()
  findAll() {
    return this.countryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countryService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCountryDto: UpdateCountryDto,
  ) {
    await this.countryService.update(+id, updateCountryDto);
    return this.countryService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const country = await this.countryService.findOne(+id);
    await this.countryService.remove(+id);
    return country;
  }
}
