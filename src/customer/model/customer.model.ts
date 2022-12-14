import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CustomerAttr {
  first_name: string;
  last_name: string;
  phone: string;
  hashed_password: string;
  email: string;
  birth_date: Date;
  gender: number;
  lang_id: number;
  hashed_refresh_token: string;
}

@Table({ tableName: 'customer' })
export class Customer extends Model<Customer, CustomerAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_password: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birth_date: Date;
  @Column({
    type: DataType.INTEGER,
    defaultValue: 1,
  })
  gender: number;
  @Column({
    type: DataType.INTEGER,
    defaultValue: 1,
  })
  lang_id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_refresh_token: string;
}
