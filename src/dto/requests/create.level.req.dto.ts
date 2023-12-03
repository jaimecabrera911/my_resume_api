import { ApiProperty } from '@nestjs/swagger';

export class CreateLevelReqDto {
  @ApiProperty()
  level?: string;
}
