import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Ticket } from '../../ticket/model/ticket.model';

interface regionAttr {
  id: number;
  name: string;
}
@Table({ tableName: 'ticket_type' })
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

  @HasMany(() => Ticket)
  tickets: Ticket[];
}
