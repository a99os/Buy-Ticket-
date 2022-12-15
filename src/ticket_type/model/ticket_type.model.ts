import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface regionAttr {
  id: number;
  name: string;
}
@Table({ tableName: 'region' })
export class Ticket_Type extends Model<Ticket_Type, regionAttr> {
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
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  color: string;
}
