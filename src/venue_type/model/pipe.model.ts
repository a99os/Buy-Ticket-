import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Venue } from '../../venue/model/venude.model';
import { Venue_Type } from './venue_type.model';
@Table({ tableName: 'pipe', createdAt: false, updatedAt: false })
export class Pipe extends Model<Pipe> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venue_id: number;

  @ForeignKey(() => Venue_Type)
  @Column({
    type: DataType.INTEGER,
  })
  venue_type_id: number;
}
