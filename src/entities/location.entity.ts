import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BasicInformationEntity } from './basic-info.entity';

@Entity({ name: 'locations' })
export class LocationEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  address?: string;

  @Column()
  postalCode?: string;

  @Column()
  city?: string;

  @OneToMany(
    () => BasicInformationEntity,
    (basicsInformation) => basicsInformation.location,
    { cascade: true },
  )
  basicsInformation?: BasicInformationEntity[];
}
