import { ResumeReqDTo } from '../dto/requests/resume.req.dto';
import { ResumeEntity } from '../entities/resume.entity';
import { assign } from 'lodash';

export class ResumeMapper {
  static toEntity = (resumeReqDto: ResumeReqDTo): Partial<ResumeEntity> => {
    return assign(new ResumeEntity(), resumeReqDto);
  };
}
