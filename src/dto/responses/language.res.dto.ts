import { ApiProperty } from '@nestjs/swagger';

export class LanguageResDto {
  @ApiProperty()
  language?: string;
}
