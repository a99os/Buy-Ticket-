import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerGuard } from '../common/guards/customer.guard';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @UseGuards(CustomerGuard)
  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    await this.cartService.update(+id, updateCartDto);
    return this.cartService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const cart = await this.cartService.findOne(+id);
    await this.cartService.remove(+id);
    return cart;
  }
}
