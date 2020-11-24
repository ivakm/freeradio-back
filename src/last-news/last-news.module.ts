import { Module } from '@nestjs/common';
import { LastNewsService } from './last-news.service';
import { LastNewsController } from './last-news.controller';

@Module({
  providers: [LastNewsService],
  controllers: [LastNewsController]
})
export class LastNewsModule {}
