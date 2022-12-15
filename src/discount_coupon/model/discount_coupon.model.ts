import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Booking } from '../../booking/model/booking.model';

interface discount_couponAttr {
  id: number;
  name: string;
}
@Table({ tableName: 'discount_coupon' })
export class Discount_Coupon extends Model<
  Discount_Coupon,
  discount_couponAttr
> {
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

  @HasMany(() => Booking)
  bookings: Booking[];
}
