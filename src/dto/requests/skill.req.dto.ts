import { ApiProperty } from '@nestjs/swagger';

export class SkillReqDTo {
  @ApiProperty()
  name: string;
  @ApiProperty()
  level: string;
  @ApiProperty({ type: [String] })
  keys: string[];
}
