import { LanguageEntity } from '../entities/language.entity';
import { LanguageResDto } from '../dto/responses/language.res.dto';

export class LevelMapper {
  static toResDto = (levelEntity: LanguageEntity): string => {
    return levelEntity.name;
  };
}
