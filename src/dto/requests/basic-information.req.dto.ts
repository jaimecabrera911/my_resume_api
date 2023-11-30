import { ApiProperty } from '@nestjs/swagger';
import { LocationReqDto } from './location.req.dto';
import { Column } from 'typeorm';

export class BasicInformationReqDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  secondName: string;

  @ApiProperty()
  firstSurname: string;

  @ApiProperty()
  secondSurname: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  cellphone: string;

  @Column({ nullable: true })
  url: string;

  @ApiProperty()
  birthDate: string;

  @ApiProperty()
  birthCountry: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ type: LocationReqDto })
  location?: LocationReqDto;
}
