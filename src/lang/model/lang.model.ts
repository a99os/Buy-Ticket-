import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface genderAttr {
  id: number;
  name: string;
}
@Table({ tableName: 'gender' })
export class Lang extends Model<Lang, genderAttr> {
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
