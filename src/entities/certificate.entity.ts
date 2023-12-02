import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ResumeEntity } from './resume.entity';

@Entity({ name: 'certificates' })
export class CertificateEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column()
  issuer?: string;

  @Column()
  url?: string;

  @Column()
  issueDate?: Date;

  @ManyToOne(() => ResumeEntity, (resume) => resume.certificates)
  resume?: ResumeEntity;
}
