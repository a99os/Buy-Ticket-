import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Customer_Address } from '../../customer_address/model/customer_address.model';
import { Venue } from '../../venue/model/venude.model';

interface regionAttr {
  id: number;
  name: string;
}
@Table({ tableName: 'region' })
export class Region extends Model<Region, regionAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @HasMany(() => Customer_Address)
  customer_adresses: Customer_Address[];

  @HasMany(() => Venue)
  venues: Venue[];
}
