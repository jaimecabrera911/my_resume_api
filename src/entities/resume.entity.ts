import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { EducationEntity } from './education.entity';

@Entity({ name: 'resumes' })
export class ResumeEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  profession?: string;

  @Column()
  summary?: string;

  @ManyToOne(() => UserEntity, (user) => user.resumes)
  user?: UserEntity;

  @OneToMany(() => EducationEntity, (education) => education.resume, {
    cascade: true,
  })
  education?: EducationEntity[];
}
