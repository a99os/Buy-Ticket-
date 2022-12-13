import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface adminAttr {
  id: number;
  name: string;
  login: string;
  hashed_password: string;
  is_active: boolean;
  is_creative: boolean;
  hashed_refresh_token: string;
}

@Table({ tableName: 'admin' })
export class Admin extends Model<Admin, adminAttr> {
  @Column({
    type: DataType.BIGINT,
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
    unique: true,
    allowNull: false,
  })
  login: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_password: string;
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_creator: boolean;
}
