import { Column, DataType, Model, Table } from 'sequelize-typescript';

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

  @Column({
    type: DataType.INTEGER,
  })
  parent_event_type_id: number;
}
