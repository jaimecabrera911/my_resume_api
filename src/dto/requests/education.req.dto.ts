import { ApiProperty } from '@nestjs/swagger';

export class EducationReqDto {
  @ApiProperty()
  institute?: string;

  @ApiProperty()
  degree?: string;

  @ApiProperty()
  startDate?: Date;

  @ApiProperty()
  endDate?: Date;

  @ApiProperty()
  currentlyStudying?: boolean;
}
