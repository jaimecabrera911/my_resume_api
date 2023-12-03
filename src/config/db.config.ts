import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { BasicInformationEntity } from '../entities/basic-info.entity';
import { LocationEntity } from '../entities/location.entity';
import * as process from 'process';
import { ResumeEntity } from '../entities/resume.entity';
import { EducationEntity } from '../entities/education.entity';
import { ExperienceEntity } from '../entities/experience.entity';
import { ProjectEntity } from '../entities/project.entity';
import { SkillEntity } from '../entities/skill.entity';
import { AwardEntity } from '../entities/award.entity';
import { CertificateEntity } from '../entities/certificate.entity';
import { LanguageEntity } from '../entities/language.entity';
import { LevelEntity } from '../entities/level.entity';
import { LanguageLevelEntity } from '../entities/language-leverl.entity';

const dbEnvs = {
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '5432',
  dbName: process.env.DB_DATABASE || 'database',
};

const entities = [
  ResumeEntity,
  UserEntity,
  BasicInformationEntity,
  LocationEntity,
  EducationEntity,
  ExperienceEntity,
  ProjectEntity,
  SkillEntity,
  AwardEntity,
  CertificateEntity,
  LanguageEntity,
  LevelEntity,
  LanguageLevelEntity,
];
export const dbEntities = TypeOrmModule.forFeature(entities);
export const dbConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  url: `postgres://${dbEnvs.username}:${dbEnvs.password}@${dbEnvs.host}:${dbEnvs.port}/${dbEnvs.dbName}?sslmode=require`,
  entities: entities,
  autoLoadEntities: true,
  synchronize: true,
  relationLoadStrategy: 'join',
});
