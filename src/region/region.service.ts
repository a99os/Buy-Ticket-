import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './model/region.model';
@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionRepository: typeof Region) {}
  create(createRegionDto: CreateRegionDto) {
    return this.regionRepository.create(createRegionDto);
  }

  findAll() {
    return this.regionRepository.findAll();
  }

  async findOne(id: number) {
    const region = await this.regionRepository.findOne({ where: { id } });
    if (!region) {
      throw new HttpException('Bunday region topilmadi', HttpStatus.NOT_FOUND);
    }
    return region;
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    const region = await this.regionRepository.findOne({ where: { id } });
    if (!region) {
      throw new HttpException('Bunday region topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.regionRepository.update(updateRegionDto, { where: { id } });
  }

  async remove(id: number) {
    const region = await this.regionRepository.findOne({ where: { id } });
    if (!region) {
      throw new HttpException('Bunday region topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.regionRepository.destroy({ where: { id } });
  }
}
