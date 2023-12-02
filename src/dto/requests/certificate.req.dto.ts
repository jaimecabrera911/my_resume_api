import { ApiProperty } from '@nestjs/swagger';

export class CertificateReqDto {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  issuer?: string;

  @ApiProperty()
  url?: string;

  @ApiProperty()
  issueDate?: Date;
}
