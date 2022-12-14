import { Table, Model, Column, DataType } from 'sequelize-typescript';

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
  venue_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  set_type_id: number;
  @Column({
    type: DataType.STRING,
  })
  location_in_schema: string;
}
