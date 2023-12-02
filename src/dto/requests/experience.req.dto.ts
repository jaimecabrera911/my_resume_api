import { ApiProperty } from '@nestjs/swagger';

export class ExperienceReqDto {
  @ApiProperty()
  company?: string;

  @ApiProperty()
  position?: string;

  @ApiProperty()
  startDate?: Date;

  @ApiProperty()
  endDate?: Date;

  @ApiProperty()
  currentlyWorking?: boolean;

  @ApiProperty()
  highlights?: string[];
}
