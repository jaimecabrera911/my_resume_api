import { UserEntity } from '../entities/user.entity';
import { assign, omit } from 'lodash';
import { UserResDto } from '../dto/responses/user.res.dto';

export class UserMapper {
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
