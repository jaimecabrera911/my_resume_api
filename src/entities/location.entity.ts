import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
