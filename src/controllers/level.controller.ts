import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserReqDto } from '../dto/requests/user.req.dto';
import { LanguageService } from '../services/language/language.service';
import { LanguageReqDto } from '../dto/requests/language.req.dto';
import { CreateLanguageReqDto } from '../dto/requests/create.language.req.dto';
import { LevelService } from '../services/level/level.service';
import { CreateLevelReqDto } from '../dto/requests/create.level.req.dto';

@Controller('levels')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}

  @Get()
  async getLevels() {
    return this.levelService.findAllLevels();
  }

  @Post()
  @HttpCode(201)
  async createLevel(@Body() createLevelReqDto: CreateLevelReqDto) {
    await this.levelService.saveLevel(createLevelReqDto);
  }
}
