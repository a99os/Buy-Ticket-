import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Booking } from '../../booking/model/booking.model';

interface payment_methodAttr {
  id: number;
  name: string;
}
@Table({ tableName: 'payment_method' })
export class Payment_Method extends Model<Payment_Method, payment_methodAttr> {
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
