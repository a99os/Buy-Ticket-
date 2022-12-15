import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDelivery_MethodDto } from './dto/create-delivery_method.dto';
import { UpdateDelivery_MethodDto } from './dto/update-delivery_method.dto';
import { Delivery_Method } from './model/delivery_method.model';
@Injectable()
export class Delivery_MethodService {
  constructor(
    @InjectModel(Delivery_Method)
    private delivery_methodRepository: typeof Delivery_Method,
  ) {}
  create(createDelivery_MethodDto: CreateDelivery_MethodDto) {
    return this.delivery_methodRepository.create(createDelivery_MethodDto);
  }

  findAll() {
    return this.delivery_methodRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const delivery_method = await this.delivery_methodRepository.findOne({
      where: { id },
    });
    if (!delivery_method) {
      throw new HttpException(
        'Bunday delivery_method topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return delivery_method;
  }

  async update(id: number, updateDelivery_MethodDto: UpdateDelivery_MethodDto) {
    const delivery_method = await this.delivery_methodRepository.findOne({
      where: { id },
    });
    if (!delivery_method) {
      throw new HttpException(
        'Bunday delivery_method topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.delivery_methodRepository.update(updateDelivery_MethodDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    const delivery_method = await this.delivery_methodRepository.findOne({
      where: { id },
    });
    if (!delivery_method) {
      throw new HttpException(
        'Bunday delivery_method topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.delivery_methodRepository.destroy({ where: { id } });
  }
}
