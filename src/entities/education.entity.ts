import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ResumeEntity } from './resume.entity';

@Entity({ name: 'education' })
export class EducationEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  institute?: string;

  @Column()
  degree?: string;

  @Column()
  startDate?: Date;

  @Column()
  endDate?: Date;

  @Column()
  currentlyStudying?: boolean;

  @ManyToOne(() => ResumeEntity, (resume) => resume.education)
  resume?: ResumeEntity;
}
