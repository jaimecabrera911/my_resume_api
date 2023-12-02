import { ApiProperty } from '@nestjs/swagger';

export class ProjectReqDto {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  url?: string;

  @ApiProperty()
  startDate?: Date;

  @ApiProperty()
  endDate?: Date;
}
