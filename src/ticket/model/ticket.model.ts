import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cart } from '../../cart/model/cart.model';
import { Event } from '../../event/model/event.model';
import { Seat } from '../../seat/model/seat.model';
import { Status } from '../../status/model/status.model';
import { Ticket_Type } from '../../ticket_type/model/ticket_type.model';

interface TicketAttr {
  id: number;
  event_id: number;
  seat_id: number;
  price: number;
  service_fee: number;
  status: number;
  ticket_type: number;
}

@Table({ tableName: 'ticket' })
export class Ticket extends Model<Ticket, TicketAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
  })
  event_id: number;
  @ForeignKey(() => Seat)
  @Column({
    type: DataType.INTEGER,
  })
  seat_id: number;
  @Column({
    type: DataType.DECIMAL(13, 2),
  })
  price: number;
  @Column({
    type: DataType.DECIMAL(13, 2),
  })
  service_fee: number;
  @ForeignKey(() => Status)
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;
  @ForeignKey(() => Ticket_Type)
  @Column({
    type: DataType.INTEGER,
  })
  ticket_type: number;

  @BelongsTo(() => Event)
  event: Event;
  @BelongsTo(() => Seat)
  seat: Seat;
  @BelongsTo(() => Status)
  status: Status;

  @HasOne(() => Cart)
  cart: Cart;
}
