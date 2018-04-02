import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Entry } from './entry.entity';
import { User } from 'user/user.entity';

@Component()
export class EntryService {
  constructor(
    @InjectRepository(Entry) private readonly entry: Repository<Entry>,
    @InjectRepository(User) private readonly user: Repository<User>
  ) {}

  findAll() {
    return this.entry.find({ relations: ['user'] });
  }

  async create(entry: Entry, user: User) {
    entry.user = user;
    await this.user.save(user);
    await this.entry.save(entry);
    return { success: true };
  }
}
