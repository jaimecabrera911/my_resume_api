import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { BasicInformationEntity } from '../entities/basic-info.entity';
import { LocationEntity } from '../entities/location.entity';
import * as process from 'process';

const dbEnv = {
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '5432',
  dbName: process.env.DB_DATABASE || 'database',
};

export const dbEntities = TypeOrmModule.forFeature([
  UserEntity,
  BasicInformationEntity,
  LocationEntity,
]);
export const dbConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  url: `postgres://${dbEnv.username}:${dbEnv.password}@${dbEnv.host}:${dbEnv.port}/${dbEnv.dbName}?sslmode=require`,
  entities: [UserEntity, BasicInformationEntity, LocationEntity],
  autoLoadEntities: true,
  synchronize: true,
});
