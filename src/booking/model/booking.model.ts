import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface bookingAttr {
  id: number;
  card_id: number;
  finished: Date;
  payment_method_id: number;
  delivery_method_id: number;
  discount_cupon_id: number;
  status_id: number;
}

@Table({ tableName: 'booking' })
export class Booking extends Model<Booking, bookingAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({
    type: DataType.INTEGER,
  })
  card_id: number;
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  finished: Date;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  payment_method_id: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  delivery_method_id: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  discount_cupon_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;
}
