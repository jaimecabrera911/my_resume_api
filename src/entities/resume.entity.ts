import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { EducationEntity } from './education.entity';
import { ExperienceEntity } from './experience.entity';
import { CertificateEntity } from './certificate.entity';
import { AwardEntity } from './award.entity';
import { ProjectEntity } from './project.entity';
import { SkillEntity } from './skill.entity';

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

  @OneToMany(() => ExperienceEntity, (experience) => experience.resume, {
    cascade: true,
  })
  experience?: ExperienceEntity[];

  @OneToMany(() => CertificateEntity, (certificate) => certificate.resume, {
    cascade: true,
  })
  certificates?: CertificateEntity[];

  @OneToMany(() => ProjectEntity, (project) => project.resume, {
    cascade: true,
  })
  projects?: ProjectEntity[];

  @OneToMany(() => AwardEntity, (award) => award.resume, {
    cascade: true,
  })
  awards?: AwardEntity[];

  @OneToMany(() => SkillEntity, (skill) => skill.resume, {
    cascade: true,
  })
  skills?: SkillEntity[];

}
