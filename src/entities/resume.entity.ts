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
import { LanguageLevelEntity } from './language-leverl.entity';

@Entity({ name: 'resumes' })
export class ResumeEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  profession?: string;

  @Column()
  summary?: string;

  @ManyToOne(() => UserEntity, (user) => user.resumes, { eager: true })
  user?: UserEntity;

  @OneToMany(() => EducationEntity, (education) => education.resume, {
    cascade: true,
    eager: true,
  })
  education?: EducationEntity[];

  @OneToMany(() => ExperienceEntity, (experience) => experience.resume, {
    cascade: true,
    eager:true
  })
  experience?: ExperienceEntity[];

  @OneToMany(() => CertificateEntity, (certificate) => certificate.resume, {
    cascade: true,
    eager:true
  })
  certificates?: CertificateEntity[];

  @OneToMany(() => ProjectEntity, (project) => project.resume, {
    cascade: true,
    eager:true
  })
  projects?: ProjectEntity[];

  @OneToMany(() => AwardEntity, (award) => award.resume, {
    cascade: true,
    eager:true
  })
  awards?: AwardEntity[];

  @OneToMany(() => SkillEntity, (skill) => skill.resume, {
    cascade: true,
    eager:true
  })
  skills?: SkillEntity[];

  @OneToMany(
    () => LanguageLevelEntity,
    (languageLevel) => languageLevel.resume,
    {
      cascade: true,
      eager:true
    },
  )
  languagesLevels?: LanguageLevelEntity[];
}
