import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface EventAttr {
  id: number;
  name: string;
  photo: string;
  start_date: Date;
  start_time: string;
  finish_date: Date;
  finish_time: string;
  info: string;
  event_type_id: number;
  human_category_id: number;
  venue_id: number;
  lang_id: number;
  release_date: Date;
}
@Table({ tableName: 'event' })
export class Event extends Model<Event, EventAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  photo: string;
  @Column({
    type: DataType.DATE,
  })
  start_date: Date;
  @Column({ type: DataType.STRING })
  start_time: string;
  @Column({
    type: DataType.DATE,
  })
  finish_date: Date;
  @Column({ type: DataType.STRING })
  finish_time: string;
  @Column({
    type: DataType.TEXT,
  })
  info: string;
  @Column({
    type: DataType.INTEGER,
  })
  event_type_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  human_category_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  venue_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  lang_id: number;
  @Column({
    type: DataType.DATE,
  })
  release_date: Date;
}
