import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserReqDto } from '../dto/requests/user.req.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  @HttpCode(201)
  async createUser(@Body() userReqDto: UserReqDto) {
    return this.userService.saveUser(userReqDto);
  }
}
