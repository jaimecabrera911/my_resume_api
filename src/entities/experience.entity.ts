import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ResumeEntity } from './resume.entity';

@Entity({ name: 'experience' })
export class ExperienceEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  company?: string;

  @Column()
  position?: string;

  @Column()
  startDate?: Date;

  @Column()
  endDate?: Date;

  @Column()
  currentlyWorking?: boolean;

  @Column({ type: 'jsonb' })
  highlights?: string[];

  @ManyToOne(() => ResumeEntity, (resume) => resume.experience)
  resume?: ResumeEntity;
}
