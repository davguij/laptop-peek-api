import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';

@Component()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>
  ) {}

  findOne(id) {
    return this.user.findOneById(id);
  }

  create(entry: User) {
    return this.user.save(entry);
  }
}
