import { ApiProperty } from '@nestjs/swagger';

export class LocationResDto {
  @ApiProperty()
  address: string;

  @ApiProperty()
  postalCode: string;

  @ApiProperty()
  city: string;
}
