import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LevelEntity } from '../../entities/level.entity';
import { LevelMapper } from '../../mappers/level.mapper';
import { CreateLevelReqDto } from '../../dto/requests/create.level.req.dto';

@Injectable()
export class LevelService {
  constructor(
    @InjectRepository(LevelEntity)
    private readonly levelEntityRepository: Repository<LevelEntity>,
  ) {}

  async findAllLevels() {
    return this.levelEntityRepository
      .find()
      .then((levels) => levels.map((level) => LevelMapper.toResDto(level)));
  }

  async saveLevel(createLevelReqDto: CreateLevelReqDto) {
    await this.levelEntityRepository.save({ name: createLevelReqDto.level });
  }
}
