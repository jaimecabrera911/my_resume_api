import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserReqDto } from '../dto/requests/user.req.dto';
import { LanguageService } from '../services/language/language.service';
import { LanguageReqDto } from '../dto/requests/language.req.dto';
import { CreateLanguageReqDto } from '../dto/requests/create.language.req.dto';

@Controller('languages')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Get()
  async getLanguages() {
    return this.languageService.findLanguages();
  }

  @Post()
  @HttpCode(201)
  async createLanguage(@Body() createLanguageReqDto: CreateLanguageReqDto) {
    await this.languageService.saveLanguage(createLanguageReqDto);
  }
}
