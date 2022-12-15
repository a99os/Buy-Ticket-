import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Customer } from '../../customer/model/customer.model';
import { Human_Category } from '../../human-category/model/human-category.model';

interface genderAttr {
  id: number;
  name: string;
}
@Table({ tableName: 'gender' })
export class Gender extends Model<Gender, genderAttr> {
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

  @HasMany(() => Customer)
  customers: Customer[];
  @HasMany(() => Human_Category)
  human_categories: Human_Category[];
}
