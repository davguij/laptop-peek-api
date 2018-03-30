import { Controller, Get, Post, Body } from '@nestjs/common';

import { PublicFeedService } from './public-feed.service';

@Controller('public-feed')
export class PublicFeedController {
  constructor(private readonly publicFeedService: PublicFeedService) {}
  @Get()
  async findAll() {
    return this.publicFeedService.findAll();
  }

  @Post()
  async create(@Body() input) {
    return this.publicFeedService.create(input);
  }
}
