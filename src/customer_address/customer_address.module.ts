import { Module } from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { Customer_AddressController } from './customer_address.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer_Address } from './model/customer_address.model';

@Module({
  imports: [SequelizeModule.forFeature([Customer_Address])],

  controllers: [Customer_AddressController],
  providers: [CustomerAddressService],
})
export class CustomerAddressModule {}
