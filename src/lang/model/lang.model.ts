import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Customer } from '../../customer/model/customer.model';
import { Event } from '../../event/model/event.model';

interface langAttr {
  id: number;
  name: string;
}
@Table({ tableName: 'lang' })
export class Lang extends Model<Lang, langAttr> {
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

  @HasMany(() => Customer)
  customers: Customer[];

  @HasMany(() => Event)
  events: Event[];
}
