import { ApiProperty } from '@nestjs/swagger';
import { EducationReqDto } from './education.req.dto';

export class ResumeReqDTo {
  @ApiProperty()
  profession: string;
  @ApiProperty()
  summary: string;
  @ApiProperty({ type: [EducationReqDto] })
  education: EducationReqDto[];
}
