import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

interface EventTypeAttr {
  id: number;
  name: string;
  parent_event_type_id: number;
}

@Table({ tableName: 'event_type' })
export class Event_Type extends Model<Event_Type, EventTypeAttr> {
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
    allowNull: false,
  })
  name: string;

  @ForeignKey(() => Event_Type)
  @Column({
    type: DataType.INTEGER,
  })
  parent_event_type_id: number;

  @BelongsTo(() => Event_Type)
  parent: Event_Type;
}
