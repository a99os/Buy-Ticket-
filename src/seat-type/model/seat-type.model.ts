import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Seat } from '../../seat/model/seat.model';

interface SeatTypeAttr {
  id: number;
  name: string;
}

@Table({ tableName: 'seat_type' })
export class Seat_Type extends Model<Seat_Type, SeatTypeAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  name: string;

  @HasMany(() => Seat)
  seats: Seat[];
}
