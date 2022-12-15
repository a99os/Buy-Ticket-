import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Customer_Address } from '../../customer_address/model/customer_address.model';

interface countryAttr {
  id: number;
  name: string;
}
@Table({ tableName: 'country' })
export class Country extends Model<Country, countryAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @HasMany(() => Customer_Address)
  cutomer_addreses: Customer_Address[];
}
