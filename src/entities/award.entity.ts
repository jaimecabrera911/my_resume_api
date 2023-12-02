import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ResumeEntity } from './resume.entity';

@Entity({ name: 'awards' })
export class AwardEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title?: string;

  @Column()
  institution?: string;

  @Column()
  url?: string;

  @Column()
  awardDate?: Date;

  @ManyToOne(() => ResumeEntity, (resume) => resume.awards)
  resume?: ResumeEntity;
}
