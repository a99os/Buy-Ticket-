import { Column, DataType, Model, Table } from 'sequelize-typescript';

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

  @Column({
    type: DataType.INTEGER,
  })
  event_id: number;
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
  @Column({
    type: DataType.INTEGER,
  })
  status: number;
  @Column({
    type: DataType.INTEGER,
  })
  ticket_type: number;
}
