import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { ConfigModule } from '@nestjs/config';
import { dbConfig, dbEntities } from './config/db.config';
import { ResumeService } from './services/resume/resume.service';
import { ResumeController } from './controllers/resume.controller';
import { LanguageService } from './services/language/language.service';
import { LanguageController } from './controllers/language.controller';
import { LevelService } from './services/level/level.service';
import { LevelController } from './controllers/level.controller';

@Module({
  imports: [ConfigModule.forRoot(), dbEntities, dbConfig],
  controllers: [
    AppController,
    UserController,
    ResumeController,
    LanguageController,
    LevelController
  ],
  providers: [AppService, UserService, ResumeService, LanguageService, LevelService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
