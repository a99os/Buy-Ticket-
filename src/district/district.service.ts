import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './model/district.model';
@Injectable()
export class DistrictService {
  constructor(@InjectModel(District) private districtRepository: typeof District) {}
  create(createDistrictDto: CreateDistrictDto) {
    return this.districtRepository.create(createDistrictDto);
  }

  findAll() {
    return this.districtRepository.findAll();
  }

  async findOne(id: number) {
    const district = await this.districtRepository.findOne({ where: { id } });
    if (!district) {
      throw new HttpException('Bunday district topilmadi', HttpStatus.NOT_FOUND);
    }
    return district;
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    const district = await this.districtRepository.findOne({ where: { id } });
    if (!district) {
      throw new HttpException('Bunday district topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.districtRepository.update(updateDistrictDto, { where: { id } });
  }

  async remove(id: number) {
    const district = await this.districtRepository.findOne({ where: { id } });
    if (!district) {
      throw new HttpException('Bunday district topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.districtRepository.destroy({ where: { id } });
  }
}
