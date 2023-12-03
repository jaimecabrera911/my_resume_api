import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ResumeEntity } from './resume.entity';
import { JoinTable } from 'typeorm/browser';

@Entity({ name: 'levels' })
export class LevelEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;
}
