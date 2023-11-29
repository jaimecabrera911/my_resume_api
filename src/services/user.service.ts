import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserReqDto } from '../dto/user.req.dto';
import { LocationEntity } from '../entities/location.entity';
import { BasicInformationEntity } from '../entities/basic-info.entity';

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

    const locationEntity = await this.locationEntityRepository.save(location);

    const basicInformation: Partial<BasicInformationEntity> = {
      ...basicInfo,
      location: locationEntity,
    };

    const basicInformationEntity: Partial<BasicInformationEntity> =
      await this.basicInformationRepository.save(basicInformation);

    const user: Partial<UserEntity> = {
      username: userReqDto.username,
      password: userReqDto.password,
      isActive: true,
      basicInformation: basicInformationEntity,
    };
    const userEntity = this.userRepository.create(user);
    return this.userRepository.save(userEntity);
  }

  async getUsers() {
    return this.userRepository.find();
  }
}
