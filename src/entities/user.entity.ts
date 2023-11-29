import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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
  @ManyToOne(
    () => BasicInformationEntity,
    (basicInformation) => basicInformation.users,
  )
  basicInformation?: BasicInformationEntity;
}
