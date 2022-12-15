import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Customer } from '../../customer/model/customer.model';
import { Ticket } from '../../ticket/model/ticket.model';

interface cartAttr {
  ticket_id: number;
  customer_id: number;
  finishedAt: Date;
  status_id: number;
}
@Table({ tableName: 'cart' })
export class Cart extends Model<Cart, cartAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ticket_id: number;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;
  @Column({
    type: DataType.DATE,
    defaultValue: new Date(new Date().getTime() + 30 * 60000),
  })
  finishedAt: Date;
  @Column({
    type: DataType.INTEGER,
    defaultValue: 1,
  })
  status_id: number;

  @BelongsTo(() => Ticket)
  ticket: Ticket;
  @BelongsTo(() => Customer)
  customer: Customer;
}
