import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userSrv: UserService) {}
  @Get(':id')
  findOne(@Param() params) {
    return this.userSrv.findOne(params.id);
  }

  @Post()
  create(@Body() input) {
    return this.userSrv.create(input);
  }
}
