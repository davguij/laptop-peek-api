import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FeedItem } from './public-feed.entity';
import { PublicFeedController } from './public-feed.controller';
import { PublicFeedService } from './public-feed.service';

@Module({
  imports: [TypeOrmModule.forFeature([FeedItem])],
  controllers: [PublicFeedController],
  components: [PublicFeedService],
})
export class PublicFeedModule {}
