import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguageEntity } from '../../entities/language.entity';
import { CreateLanguageReqDto } from '../../dto/requests/create.language.req.dto';
import { LanguageMapper } from '../../mappers/language.mapper';

@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(LanguageEntity)
    private readonly languageRepository: Repository<LanguageEntity>,
  ) {}

  async findLanguages() {
    return this.languageRepository
      .find()
      .then((languages) =>
        languages.map((lang) => LanguageMapper.toResDto(lang)),
      );
  }

  async saveLanguage(createLanguageReqDto: CreateLanguageReqDto) {
    const languageEntity: Partial<LanguageEntity> = {
      name: createLanguageReqDto.language,
    };
    const language = await this.languageRepository.save(languageEntity);
    return LanguageMapper.toResDto(language);
  }
}
