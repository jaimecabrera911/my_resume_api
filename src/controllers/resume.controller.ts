import { Body, Controller, Get, Headers, HttpCode, Post } from '@nestjs/common';
import { ResumeService } from '../services/resume/resume.service';
import { ResumeReqDTo } from '../dto/requests/resume.req.dto';

@Controller('resumes')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Get()
  async getResumes(@Headers('User') username: string) {
    return this.resumeService.findResumeByUser(username);
  }

  @Post()
  @HttpCode(201)
  async createResume(
    @Headers('User') user: string,
    @Body() resumeReqDto: ResumeReqDTo,
  ) {
    return this.resumeService.saveResume(resumeReqDto, user);
  }
}
