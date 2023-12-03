import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ResumeEntity } from './resume.entity';
import { JoinTable } from 'typeorm/browser';

@Entity({ name: 'languages' })
export class LanguageEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  name?: string;
}
