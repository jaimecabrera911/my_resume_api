import { ApiProperty } from '@nestjs/swagger';

export class AwardReqDto {
  @ApiProperty()
  title?: string;

  @ApiProperty()
  institution?: string;

  @ApiProperty()
  url?: string;

  @ApiProperty()
  awardDate?: Date;
}
