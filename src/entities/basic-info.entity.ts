import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { LocationEntity } from './location.entity';

@Entity({ name: 'basic_information' })
export class BasicInformationEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  firstName?: string;

  @Column()
  secondName?: string;

  @Column()
  firstSurname?: string;

  @Column()
  secondSurname?: string;

  @Column()
  gender?: string;

  @Column()
  phone?: string;

  @Column()
  cellphone?: string;

  @Column({ nullable: true })
  url?: string;

  @Column()
  birthDate?: string;

  @Column()
  birthCountry?: string;

  @Column()
  email?: string;

  @OneToMany(() => UserEntity, (user) => user.basicInformation)
  users?: UserEntity[];

  @ManyToOne(() => LocationEntity, (location) => location.basicsInformation)
  location?: LocationEntity;
}
