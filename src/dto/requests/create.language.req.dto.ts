import { ApiProperty } from '@nestjs/swagger';

export class CreateLanguageReqDto {
  @ApiProperty()
  language?: string;
}
