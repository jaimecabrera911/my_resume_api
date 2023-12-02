import { ApiProperty } from '@nestjs/swagger';

export class LanguageReqDto {
  @ApiProperty()
  language?: string;

  @ApiProperty()
  level?: string;
}
