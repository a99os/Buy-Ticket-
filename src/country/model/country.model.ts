import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface countryAttr {
  id: number;
  name: string;
}
@Table({ tableName: 'country' })
export class Country extends Model<Country, countryAttr> {
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
}
