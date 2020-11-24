import { Module } from '@nestjs/common';
import { LastNewsModule } from './last-news/last-news.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    LastNewsModule,
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {
}
