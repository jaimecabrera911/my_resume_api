import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResumeEntity } from '../../entities/resume.entity';
import { Repository } from 'typeorm';
import { ResumeReqDTo } from '../../dto/requests/resume.req.dto';
import { UserEntity } from '../../entities/user.entity';
import { LanguageEntity } from '../../entities/language.entity';
import { LevelEntity } from '../../entities/level.entity';
import { LanguageLevelEntity } from '../../entities/language-leverl.entity';

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(ResumeEntity)
    private readonly resumeRepository: Repository<ResumeEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(LanguageEntity)
    private readonly languageRepository: Repository<LanguageEntity>,
    @InjectRepository(LevelEntity)
    private readonly levelRepository: Repository<LevelEntity>,
  ) {}

  public async saveResume(resumeReqDto: ResumeReqDTo, username: string) {
    const languagesLevelsEntity: LanguageLevelEntity[] = [];
    for (const lang of resumeReqDto.languages) {
      let langEntity = this.languageRepository.findOneBy({
        name: lang.language,
      });
      let levelEntity = this.levelRepository.findOneBy({
        name: lang.level,
      });
      const langLevelEntity: LanguageLevelEntity = {
        language: await langEntity,
        level: await levelEntity,
      };
      languagesLevelsEntity.push(langLevelEntity);
    }
    const userEntity = await this.userRepository.findOneBy({
      username: username,
    });
    let resumeEntity = this.resumeRepository.create({
      ...resumeReqDto,
      user: userEntity,
      languagesLevels: languagesLevelsEntity,
    });
    return this.resumeRepository.save(resumeEntity);
  }

  async findResumeByUser(username: String) {
    const resumes = await this.resumeRepository.find({
    });
    return resumes.filter((resume) => resume.user.username === username);
  }
}
