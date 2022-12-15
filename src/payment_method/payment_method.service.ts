import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePayment_MethodDto } from './dto/create-payment_method.dto';
import { UpdatePayment_MethodDto } from './dto/update-payment_method.dto';
import { Payment_Method } from './model/payment_method.model';

@Injectable()
export class Payment_MethodService {
  constructor(
    @InjectModel(Payment_Method)
    private payment_methodRepository: typeof Payment_Method,
  ) {}
  create(createPayment_MethodDto: CreatePayment_MethodDto) {
    return this.payment_methodRepository.create(createPayment_MethodDto);
  }

  findAll() {
    return this.payment_methodRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const payment_method = await this.payment_methodRepository.findOne({
      where: { id },
    });
    if (!payment_method) {
      throw new HttpException(
        'Bunday payment_method topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return payment_method;
  }

  async update(id: number, updatePayment_MethodDto: UpdatePayment_MethodDto) {
    const payment_method = await this.payment_methodRepository.findOne({
      where: { id },
    });
    if (!payment_method) {
      throw new HttpException(
        'Bunday payment_method topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.payment_methodRepository.update(updatePayment_MethodDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    const payment_method = await this.payment_methodRepository.findOne({
      where: { id },
    });
    if (!payment_method) {
      throw new HttpException(
        'Bunday payment_method topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.payment_methodRepository.destroy({ where: { id } });
  }
}
