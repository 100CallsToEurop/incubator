import { Module } from '@nestjs/common';
import { VideosService } from './application/videos.service';
import { VideosController } from './api/videos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from './domain/entities/video.entity';
import { VideosRepository } from './repository/videos.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Video])],
  controllers: [VideosController],
  providers: [VideosService, VideosRepository],
  exports: [VideosService],
})
export class VideosModule {}
