import { Component, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FeedItem } from './public-feed.entity';

@Component()
export class PublicFeedService {
  constructor(
    @InjectRepository(FeedItem) private readonly feedItem: Repository<FeedItem>
  ) {}

  findAll() {
    return this.feedItem.find();
  }

  create(feedItem: FeedItem) {
    return this.feedItem.create(feedItem);
  }
}
