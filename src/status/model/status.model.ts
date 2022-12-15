import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface regionAttr {
  id: number;
  name: string;
}
@Table({ tableName: 'region' })
export class Status extends Model<Status, regionAttr> {
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
