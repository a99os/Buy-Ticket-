import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CustAdressAttr {
  customer_id: number;
  name: string;
  country_id: number;
  region_id: number;
  district_id: number;
  street: string;
  house: string;
  flast: string;
  location: string;
  post_index: string;
  info: string;
}

@Table({ tableName: 'customer_address' })
export class Customer_Address extends Model<Customer_Address, CustAdressAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
  })
  customer_id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
  })
  country_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  district_id: number;
  @Column({
    type: DataType.STRING,
  })
  street: string;
  @Column({
    type: DataType.STRING,
  })
  house: string;
  @Column({
    type: DataType.INTEGER,
  })
  flat: number;
  @Column({
    type: DataType.STRING,
  })
  location: string;
  @Column({
    type: DataType.TEXT,
  })
  info: string;
}
