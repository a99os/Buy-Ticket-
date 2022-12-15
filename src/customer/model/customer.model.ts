import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cart } from '../../cart/model/cart.model';
import { Customer_Address } from '../../customer_address/model/customer_address.model';
import { Customer_Card } from '../../customer_card/model/customer_card.model';
import { Gender } from '../../gender/model/gender.model';
import { Lang } from '../../lang/model/lang.model';

interface CustomerAttr {
  first_name: string;
  last_name: string;
  phone: string;
  hashed_password: string;
  email: string;
  birth_date: Date;
  gender: number;
  lang_id: number;
  hashed_refresh_token: string;
}

@Table({ tableName: 'customer' })
export class Customer extends Model<Customer, CustomerAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_password: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birth_date: Date;
  @ForeignKey(() => Gender)
  @Column({
    type: DataType.INTEGER,
    defaultValue: 1,
  })
  gender_id: number;
  @ForeignKey(() => Lang)
  @Column({
    type: DataType.INTEGER,
    defaultValue: 1,
  })
  lang_id: number;
  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;

  @BelongsTo(() => Lang)
  lang: Lang;

  @BelongsTo(() => Gender)
  gender: Gender;

  @HasMany(() => Customer_Card)
  customer_cards: Customer_Card[];
  @HasMany(() => Cart)
  cards: Cart[];
  @HasMany(() => Customer_Address)
  customer_addresses: Customer_Address[];
}
