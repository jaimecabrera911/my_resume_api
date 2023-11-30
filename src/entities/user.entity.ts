import {
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasicInformationEntity } from './basic-info.entity';

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
}
