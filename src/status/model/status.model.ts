import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Ticket } from '../../ticket/model/ticket.model';

interface statusAttr {
  id: number;
  name: string;
}
@Table({ tableName: 'status' })
export class Status extends Model<Status, statusAttr> {
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

  @HasMany(() => Ticket)
  tickets: Ticket[];
}
