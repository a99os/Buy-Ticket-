import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Event_Type } from '../../event-type/model/event_type.model';
import { Human_Category } from '../../human-category/model/human-category.model';
import { Lang } from '../../lang/model/lang.model';
import { Ticket } from '../../ticket/model/ticket.model';
import { Venue } from '../../venue/model/venude.model';

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
  @ForeignKey(() => Event_Type)
  event_type_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Human_Category)
  human_category_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Venue)
  venue_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Lang)
  lang_id: number;
  @Column({
    type: DataType.DATE,
  })
  release_date: Date;

  @BelongsTo(() => Event_Type)
  event_type: Event_Type;
  @BelongsTo(() => Human_Category)
  human_category: Human_Category;
  @BelongsTo(() => Venue)
  venue: Venue;
  @BelongsTo(() => Lang)
  language: Lang;

  @HasMany(() => Ticket)
  tickets: Ticket[];
}
