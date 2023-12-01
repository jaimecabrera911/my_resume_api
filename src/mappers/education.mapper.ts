import { assign } from 'lodash';
import { EducationReqDto } from '../dto/requests/education.req.dto';
import { EducationEntity } from '../entities/education.entity';

export class EducationMapper {
  static toEntity = (educationReqDto: EducationReqDto): EducationEntity => {
    const educationEntity = new EducationEntity();
    return assign(educationEntity, educationReqDto);
  };
}
