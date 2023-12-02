import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ResumeEntity } from './resume.entity';

@Entity({ name: 'projects' })
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column()
  description?: string;

  @Column()
  url?: string;

  @Column()
  startDate?: Date;

  @Column()
  endDate?: Date;

  @ManyToOne(() => ResumeEntity, (resume) => resume.projects)
  resume?: ResumeEntity;
}
