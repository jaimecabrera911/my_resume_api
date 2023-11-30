import { ApiProperty } from '@nestjs/swagger';
import { BasicInformationResDto } from './basic-information.res.dto';

export class UserResDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  isActive: boolean;
  @ApiProperty({ type: BasicInformationResDto })
  basicInformation: BasicInformationResDto;
}
