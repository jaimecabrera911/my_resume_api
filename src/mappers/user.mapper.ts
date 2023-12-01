import { UserEntity } from '../entities/user.entity';
import { assign, omit } from 'lodash';
import { UserResDto } from '../dto/responses/user.res.dto';
import { UserReqDto } from '../dto/requests/user.req.dto';

export class UserMapper {
  static toEntity(userReqDto: UserReqDto): UserEntity {
    const userEntity = new UserEntity();
    return assign(userEntity, userReqDto);
  }

  static toResDto = (userEntity: UserEntity): UserResDto => {
    const user = new UserResDto();
    const userOmit = omit(userEntity, [
      'id',
      'basicInformation.id',
      'basicInformation.location.id',
    ]);
    return assign(user, userOmit);
  };
}
