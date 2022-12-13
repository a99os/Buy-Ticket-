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
    type: DataType.BIGINT,
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
  @Column({
    type: DataType.TIME,
  })
  start_time: string;
  @Column({
    type: DataType.DATE,
  })
  finish_date: Date;
  @Column({
    type: DataType.TIME,
  })
  finish_time: string;
  @Column({
    type: DataType.TEXT,
  })
  info: string;
  @Column({
    type: DataType.BIGINT,
  })
  event_type_id: number;
  @Column({
    type: DataType.BIGINT,
  })
  human_category_id: number;
  @Column({
    type: DataType.BIGINT,
  })
  venue_id: number;
  @Column({
    type: DataType.BIGINT,
  })
  lang_id: number;
  @Column({
    type: DataType.DATE,
  })
  release_date: Date;
}
