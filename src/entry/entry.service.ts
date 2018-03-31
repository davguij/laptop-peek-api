import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Entry } from './entry.entity';

@Component()
export class EntryService {
  constructor(
    @InjectRepository(Entry) private readonly entry: Repository<Entry>
  ) {}

  findAll() {
    return this.entry.find();
  }

  create(entry: Entry) {
    return this.entry.save(entry);
  }
}
