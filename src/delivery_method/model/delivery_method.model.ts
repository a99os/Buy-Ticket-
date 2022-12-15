import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface delivery_methodAttr {
  id: number;
  name: string;
}
@Table({ tableName: 'delivery_method' })
export class Delivery_Method extends Model<Delivery_Method, delivery_methodAttr> {
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
