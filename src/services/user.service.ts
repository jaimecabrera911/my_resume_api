import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserReqDto } from '../dto/requests/user.req.dto';
import { LocationEntity } from '../entities/location.entity';
import { BasicInformationEntity } from '../entities/basic-info.entity';
import { assign, omit } from 'lodash';
import { UserMapper } from '../mappers/user.mapper';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(BasicInformationEntity)
    private readonly basicInformationRepository: Repository<LocationEntity>,
    @InjectRepository(LocationEntity)
    private readonly locationEntityRepository: Repository<LocationEntity>,
  ) {}

  async saveUser(userReqDto: UserReqDto) {
    const basicInfo = userReqDto.basicInformation;
    const location: Partial<LocationEntity> = { ...basicInfo.location };

    const locationEntity = await this.locationEntityRepository.create(location);

    const basicInformation: Partial<BasicInformationEntity> = {
      ...basicInfo,
      location: locationEntity,
    };

    const basicInformationEntity: BasicInformationEntity =
      await this.basicInformationRepository.create(basicInformation);

    const user: UserEntity = {
      username: userReqDto.username,
      password: userReqDto.password,
      isActive: true,
      basicInformation: { ...basicInformationEntity },
    };
    const userEntity = this.userRepository.create(user);
    return this.userRepository.save(userEntity);
  }

  async getUsers() {
    const usersEntity = await this.userRepository.find({
      relations: ['basicInformation', 'basicInformation.location'],
    });
    return usersEntity.map((userEntity) => UserMapper.toResDto(userEntity));
  }
}
