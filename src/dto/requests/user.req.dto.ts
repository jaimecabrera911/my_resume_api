import { ApiProperty } from '@nestjs/swagger';
import { BasicInformationReqDto } from './basic-information.req.dto';

export class UserReqDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  isActive: boolean;
  @ApiProperty({ type: BasicInformationReqDto })
  basicInformation: BasicInformationReqDto;
}
