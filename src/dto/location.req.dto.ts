import { ApiProperty } from '@nestjs/swagger';

export class LocationReqDto {
  @ApiProperty()
  address: string;

  @ApiProperty()
  postalCode: string;

  @ApiProperty()
  city: string;
}
