import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
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

  @OneToOne(() => LocationEntity, { cascade: true })
  @JoinColumn()
  location?: LocationEntity;
}
