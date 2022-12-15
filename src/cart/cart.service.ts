import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './model/cart.model';
@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartRepository: typeof Cart) {}
  create(createCartDto: CreateCartDto) {
    return this.cartRepository.create(createCartDto);
  }

  findAll() {
    return this.cartRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const cart = await this.cartRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!cart) {
      throw new HttpException('Bunday cart topilmadi', HttpStatus.NOT_FOUND);
    }
    return cart;
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const cart = await this.cartRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!cart) {
      throw new HttpException('Bunday cart topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.cartRepository.update(updateCartDto, { where: { id } });
  }

  async remove(id: number) {
    const cart = await this.cartRepository.findOne({
      where: { id },
      include: { all: true },
    });
    if (!cart) {
      throw new HttpException('Bunday cart topilmadi', HttpStatus.NOT_FOUND);
    }
    return this.cartRepository.destroy({ where: { id } });
  }
}
