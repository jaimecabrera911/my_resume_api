import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ResumeEntity } from './resume.entity';
import { JoinTable } from 'typeorm/browser';
import { LevelEntity } from './level.entity';
import { LanguageEntity } from './language.entity';

@Entity({ name: 'languages-levels' })
export class LanguageLevelEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @ManyToOne(() => LanguageEntity)
  language?: LanguageEntity;
  @ManyToOne(() => LevelEntity)
  level?: LevelEntity;
  @ManyToOne(() => ResumeEntity, (resume) => resume.languagesLevels)
  resume?: ResumeEntity[];
}
