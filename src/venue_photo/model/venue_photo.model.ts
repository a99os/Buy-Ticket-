import { Column, DataType, Model, Table } from 'sequelize-typescript';

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
  object_id: number;
  @Column({
    type: DataType.STRING,
  })
  url: string;
}
