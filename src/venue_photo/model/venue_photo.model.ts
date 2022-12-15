import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Venue } from '../../venue/model/venude.model';

interface VenuePhotoAttr {
  id: number;
  object_id: number;
  url: string;
}

@Table({ tableName: 'venue_photo' })
export class Venue_Photo extends Model<Venue_Photo, VenuePhotoAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column({
    type: DataType.INTEGER,
  })
  @ForeignKey(() => Venue)
  object_id: number;
  @Column({
    type: DataType.STRING,
  })
  url: string;

  @BelongsTo(() => Venue)
  venue: Venue;
}
