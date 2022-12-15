import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface discount_couponAttr {
  id: number;
  name: string;
}
@Table({ tableName: 'discount_coupon' })
export class Discount_Coupon extends Model<Discount_Coupon, discount_couponAttr> {
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
}
