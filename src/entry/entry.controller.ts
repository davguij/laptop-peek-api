import { Controller, Get, Post, Body } from '@nestjs/common';

import { EntryService } from './entry.service';

@Controller('entries')
export class EntryController {
  constructor(private readonly entrySrv: EntryService) {}
  @Get()
  findAll() {
    return this.entrySrv.findAll();
  }

  @Post()
  create(@Body() input) {
    return this.entrySrv.create(input);
  }
}
