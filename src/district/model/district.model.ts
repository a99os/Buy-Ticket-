import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Customer_Address } from '../../customer_address/model/customer_address.model';
import { Venue } from '../../venue/model/venude.model';

interface districtAttr {
  id: number;
  name: string;
}
@Table({ tableName: 'district' })
export class District extends Model<District, districtAttr> {
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
