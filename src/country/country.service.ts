import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './model/country.model';
@Injectable()
export class CountryService {
  constructor(@InjectModel(Country) private countryRepository: typeof Country) {}
  create(createCountryDto: CreateCountryDto) {
    return this.countryRepository.create(createCountryDto);
  }

  findAll() {
    return this.countryRepository.findAll();
  }

  async findOne(id: number) {
    const country = await this.countryRepository.findOne({ where: { id } });
    if (!country) {
      throw new HttpException('Bunday country topilmadi', HttpStatus.NOT_FOUND);
    }
    return country;
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    const country = await this.countryRepository.findOne({ where: { id } });
    if (!country) {
      throw new HttpException('Bunday country topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.countryRepository.update(updateCountryDto, { where: { id } });
  }

  async remove(id: number) {
    const country = await this.countryRepository.findOne({ where: { id } });
    if (!country) {
      throw new HttpException('Bunday country topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.countryRepository.destroy({ where: { id } });
  }
}
