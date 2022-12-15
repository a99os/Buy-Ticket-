import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cart } from '../../cart/model/cart.model';
import { Delivery_Method } from '../../delivery_method/model/delivery_method.model';
import { Discount_Coupon } from '../../discount_coupon/model/discount_coupon.model';
import { Payment_Method } from '../../payment_method/model/payment_method.model';
import { Status } from '../../status/model/status.model';

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

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
  })
  card_id: number;
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  finished: Date;

  @ForeignKey(() => Payment_Method)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  payment_method_id: number;
  @ForeignKey(() => Delivery_Method)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  delivery_method_id: number;

  @ForeignKey(() => Discount_Coupon)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  discount_cupon_id: number;

  @ForeignKey(() => Status)
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;

  @BelongsTo(() => Cart)
  cart: Cart;
  @BelongsTo(() => Payment_Method)
  payment_method: Payment_Method;
  @BelongsTo(() => Delivery_Method)
  delivery_method: Delivery_Method;
  @BelongsTo(() => Discount_Coupon)
  discount_method: Discount_Coupon;
  @BelongsTo(() => Status)
  status: Status;
}
