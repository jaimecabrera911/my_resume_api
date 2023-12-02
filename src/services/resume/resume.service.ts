import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResumeEntity } from '../../entities/resume.entity';
import { Repository } from 'typeorm';
import { ResumeReqDTo } from '../../dto/requests/resume.req.dto';
import { UserEntity } from '../../entities/user.entity';

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(ResumeEntity)
    private readonly resumeRepository: Repository<ResumeEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async saveResume(resumeReqDto: ResumeReqDTo, username: string) {
    const resumeEntity = this.resumeRepository.create(resumeReqDto);
    resumeEntity.user = await this.userRepository.findOneBy({
      username: username,
    });
    return this.resumeRepository.save(resumeEntity);
  }
}
