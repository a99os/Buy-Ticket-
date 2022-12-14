import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCustomer_AddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomer_AddressDto } from './dto/update-customer_address.dto';
import { Customer_Address } from './model/customer_address.model';

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(Customer_Address)
    private customer_addressRepository: typeof Customer_Address,
  ) {}
  create(createCustomer_AddressDto: CreateCustomer_AddressDto) {
    return this.customer_addressRepository.create(createCustomer_AddressDto);
  }

  findAll() {
    return this.customer_addressRepository.findAll();
  }

  async findOne(id: number) {
    const customer_address = await this.customer_addressRepository.findOne({
      where: { id },
    });
    if (!customer_address) {
      throw new HttpException(
        'Bunday customer_address topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return customer_address;
  }

  async update(
    id: number,
    updateCustomer_AddressDto: UpdateCustomer_AddressDto,
  ) {
    const customer_address = await this.customer_addressRepository.findOne({
      where: { id },
    });
    if (!customer_address) {
      throw new HttpException(
        'Bunday customer_address topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.customer_addressRepository.update(updateCustomer_AddressDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    const customer_address = await this.customer_addressRepository.findOne({
      where: { id },
    });
    if (!customer_address) {
      console.log('salom');
      throw new HttpException(
        'Bunday customer_address topilmadi',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.customer_addressRepository.destroy({ where: { id } });
  }
}
