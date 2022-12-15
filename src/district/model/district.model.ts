import { Column, DataType, Model, Table } from 'sequelize-typescript';

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
}
