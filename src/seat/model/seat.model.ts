import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Seat_Type } from '../../seat-type/model/seat-type.model';
import { Ticket } from '../../ticket/model/ticket.model';
import { Venue } from '../../venue/model/venude.model';

interface SeatAttr {
  id: number;
  sector: number;
  row_number: number;
  number: number;
  venue_id: number;
  seat_type_id: number;
  location_in_schema: string;
}

@Table({ tableName: 'seat' })
export class Seat extends Model<Seat, SeatAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id?: number;

  @Column({
    type: DataType.INTEGER,
  })
  sector: number;
  @Column({
    type: DataType.INTEGER,
  })
  row_number: number;
  @Column({
    type: DataType.INTEGER,
  })
  number: number;
  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Venue)
  venue_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Seat_Type)
  seat_type_id: number;
  @Column({
    type: DataType.STRING,
  })
  location_in_schema: string;

  @BelongsTo(() => Venue)
  venue: Venue;

  @BelongsTo(() => Seat_Type)
  seat_type: Seat_Type;

  @HasMany(() => Ticket)
  tickets: Ticket[];
}
