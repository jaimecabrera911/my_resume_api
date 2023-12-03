import { LanguageEntity } from '../entities/language.entity';
import { LanguageResDto } from '../dto/responses/language.res.dto';

export class LanguageMapper {
  static toResDto = (languageEntity: LanguageEntity): string => {
    return languageEntity.name;
  };
}
