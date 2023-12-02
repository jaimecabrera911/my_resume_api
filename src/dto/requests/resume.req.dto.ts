import { ApiProperty } from '@nestjs/swagger';
import { EducationReqDto } from './education.req.dto';
import { ExperienceReqDto } from './experience.req.dto';
import { CertificateReqDto } from './certificate.req.dto';
import { ProjectReqDto } from './project.req.dto';
import { LanguageReqDto } from './language.req.dto';
import { SkillReqDTo } from './skill.req.dto';
import { AwardReqDto } from './award.req.dto';

export class ResumeReqDTo {
  @ApiProperty()
  profession: string;
  @ApiProperty()
  summary: string;
  @ApiProperty({ type: [EducationReqDto] })
  education: EducationReqDto[];
  @ApiProperty({ type: [ExperienceReqDto] })
  experience: ExperienceReqDto[];
  @ApiProperty({ type: [CertificateReqDto] })
  certificates: CertificateReqDto[];
  @ApiProperty({ type: [ProjectReqDto] })
  projects: ProjectReqDto[];
  @ApiProperty({ type: [LanguageReqDto] })
  languages: LanguageReqDto[];
  @ApiProperty({ type: [AwardReqDto] })
  awards: AwardReqDto[];
  @ApiProperty({ type: [SkillReqDTo] })
  skills: SkillReqDTo[];
  @ApiProperty({ type: [String] })
  interests: string[];
}
