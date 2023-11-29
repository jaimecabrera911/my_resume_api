import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { LocationEntity } from './entities/location.entity';
import { BasicInformationEntity } from './entities/basic-info.entity';
import { ConfigModule } from '@nestjs/config';
import { dbConfig, dbEntities } from './config/db.config';

@Module({
  imports: [ConfigModule.forRoot(), dbEntities, dbConfig],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
