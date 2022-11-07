import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from '../videos/domain/entities/video.entity';
import { TestingQueryRepository } from './api/queryRepository/testing.repository';
import { TestingController } from './api/testing.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Video])],
  controllers: [TestingController],
  providers: [TestingQueryRepository],
})
export class TestingModule {}
