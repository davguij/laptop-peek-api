import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Entry } from './entry.entity';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';

@Module({
  imports: [TypeOrmModule.forFeature([Entry])],
  controllers: [EntryController],
  components: [EntryService],
})
export class EntryModule {}
