import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Venue } from '../../venue/model/venude.model';
import { Pipe } from './pipe.model';

interface VenueTypeAttr {
  id: number;
  event_id: number;
  seat_id: number;
  price: number;
  service_fee: number;
  status: number;
  ticket_type: number;
}

@Table({ tableName: 'venue_type' })
export class Venue_Type extends Model<Venue_Type, VenueTypeAttr> {
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
  @BelongsToMany(() => Venue, () => Pipe)
  users: Venue[];
}
