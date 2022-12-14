import { Table, Model, Column, DataType } from 'sequelize-typescript';

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
}
