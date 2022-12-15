import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Pipe } from '../../venue_type/model/pipe.model';
import { Venue_Type } from '../../venue_type/model/venue_type.model';

interface VenueAttr {
  id: number;
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  venue_type_id: number;
  schema: string;
  region_id: number;
  district_id: number;
}

@Table({ tableName: 'venue' })
export class Venue extends Model<Venue, VenueAttr> {
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
  address: string;
  @Column({
    type: DataType.STRING,
  })
  location: string;
  @Column({
    type: DataType.STRING,
  })
  site: string;
  @Column({
    type: DataType.STRING,
  })
  phone: string;
  @Column({
    type: DataType.STRING,
  })
  schema: string;
  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;
  @Column({
    type: DataType.INTEGER,
  })
  district_id: number;

  @BelongsToMany(() => Venue_Type, () => Pipe)
  venue_types: Venue_Type[];
}
