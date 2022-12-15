import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ example: 1, description: ' id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'admin1', description: ' name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @ApiProperty({ example: 'admin12345', description: ' login' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  login: string;
  @ApiProperty({
    example: 'DXCHVRHJBHJNFCTHJBJV',
    description: ' hashed_Pasword',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_password: string;
  @ApiProperty({
    example: true,
    description: 'is_active',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;
  @ApiProperty({
    example: true,
    description: 'is_creator',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_creator: boolean;
  @ApiProperty({
    example: 'WEXRVVTCTHGVJVfvhgvHGVFNCTVGHFHCTRVGBHJVGVFVNB',
    description: 'token',
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;
}
