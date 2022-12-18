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
  async create(createCustomer_CardDto: CreateCustomerCardDto) {
    const card = await this.customer_cardRepository.create(
      createCustomer_CardDto,
    );
    if (
      (
        await this.customer_cardRepository.findAll({
          where: { customer_id: card.customer_id },
        })
      ).length == 1
    ) {
      card.is_main = true;
      await card.save();
    }
    return card;
  }

  async mainCard(id: number) {
    await this.customer_cardRepository.update(
      { is_main: false },
      { where: { is_main: true } },
    );
    await this.customer_cardRepository.update(
      { is_main: true },
      { where: { id } },
    );
    return await this.findOne(id);
  }

  async activateDeactivate(id: number) {
    const card = await this.findOne(id);
    card.is_active == true ? (card.is_active = false) : (card.is_active = true);
    card.save();
    return card;
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
