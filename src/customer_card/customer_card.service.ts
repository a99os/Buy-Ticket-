import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { Customer_Card } from './model/customer_card.model';

@Injectable()
export class CustomerCardService {
  constructor(
    @InjectModel(Customer_Card)
    private customer_cardRepository: typeof Customer_Card,
  ) {}
  create(createCustomer_CardDto: CreateCustomerCardDto) {
    return this.customer_cardRepository.create(createCustomer_CardDto);
  }

  findAll() {
    return this.customer_cardRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const customer_card = await this.customer_cardRepository.findOne({
      where: { id },
    });
    if (!customer_card) {
      throw new HttpException(
        'Bunday customer_card topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return customer_card;
  }

  async update(id: number, updateCustomer_CardDto: UpdateCustomerCardDto) {
    const customer_card = await this.customer_cardRepository.findOne({
      where: { id },
    });
    if (!customer_card) {
      throw new HttpException(
        'Bunday customer_card topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.customer_cardRepository.update(updateCustomer_CardDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    const customer_card = await this.customer_cardRepository.findOne({
      where: { id },
    });
    if (!customer_card) {
      throw new HttpException(
        'Bunday customer_card topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.customer_cardRepository.destroy({ where: { id } });
  }
}
