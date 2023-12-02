import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ResumeEntity } from './resume.entity';

@Entity({ name: 'skills' })
export class SkillEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column()
  level?: string;

  @Column({ type: 'jsonb' })
  keys?: string[];

  @ManyToOne(() => ResumeEntity, (resume) => resume.education)
  resume?: ResumeEntity;
}
