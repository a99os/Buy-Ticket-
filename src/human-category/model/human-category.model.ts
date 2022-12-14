import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Gender } from '../../gender/model/gender.model';

interface HumanCategoryAttr {
  id: number;
  name: string;
  start_age: number;
  finish_age: number;
  gender: number;
}

@Table({ tableName: 'human_category' })
export class Human_Category extends Model<Human_Category, HumanCategoryAttr> {
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
    type: DataType.INTEGER,
    allowNull: false,
  })
  start_age: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  finish_age: number;
  @ForeignKey(() => Gender)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  gender_id: number;

  @BelongsTo(() => Gender)
  gender: Gender;
}
