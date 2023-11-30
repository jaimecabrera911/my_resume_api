import { ApiProperty } from '@nestjs/swagger';
import { LocationResDto } from './location.res.dto';
import { Column } from 'typeorm';

export class BasicInformationResDto {
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

  @ApiProperty({ type: LocationResDto })
  location?: LocationResDto;
}
