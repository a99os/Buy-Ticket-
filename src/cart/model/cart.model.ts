import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface cartAttr {
  ticket_id: number;
  customer_id: number;
  finishedAt: Date;
  status_id: number;
}
@Table({ tableName: 'cart' })
export class Cart extends Model<Cart, cartAttr> {
  @Column({
    type: DataType.BIGINT,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  ticket_id: number;
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  customer_id: number;
  @Column({
    type: DataType.BIGINT,
    defaultValue: new Date(new Date().getTime() + 30 * 60000),
  })
  finishedAt: Date;
  @Column({
    type: DataType.SMALLINT,
    defaultValue: 1,
  })
  status_id: number;
}
