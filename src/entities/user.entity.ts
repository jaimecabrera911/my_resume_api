import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasicInformationEntity } from './basic-info.entity';
import { ResumeEntity } from './resume.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  username?: string;
  @Column()
  password?: string;
  @Column({ default: true })
  isActive?: boolean;
  @OneToOne(() => BasicInformationEntity, { cascade: true })
  @JoinColumn()
  basicInformation?: BasicInformationEntity;
  @OneToMany(() => ResumeEntity, (resume) => resume.user)
  resumes?: ResumeEntity[];
}
