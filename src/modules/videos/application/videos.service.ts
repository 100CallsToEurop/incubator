import { Injectable } from '@nestjs/common';
import { Video } from '../domain/entities/video.entity';
import { VideosRepository } from '../repository/videos.repository';
import { CreateVideoInputModel } from './dto/videos.create.model';
import { UpdateVideoInputModel } from './dto/videos.update.model';
import { VideoView } from './types/videos.type';

@Injectable()
export class VideosService {
  constructor(private readonly videosRepository: VideosRepository) {}

  buildResponseVideo(video: Video): VideoView {
    return {
      id: video.id,
      title: video.title,
      author: video.author,
      canBeDownloaded: video.canBeDownloaded,
      minAgeRestriction: video.minAgeRestriction,
      createdAt: video.createdAt.toISOString(),
      publicationDate: video.publicationDate.toISOString(),
      availableResolutions: video.availableResolutions,
    };
  }

  async createVideo(createVideoDto: CreateVideoInputModel): Promise<VideoView> {
    const newVideo = await this.videosRepository.saveVideo(createVideoDto);
    return this.buildResponseVideo(newVideo);
  }

  async findAllVideos(): Promise<VideoView[]> {
    const videos = await this.videosRepository.findAllVideo();
    return videos.map(v => this.buildResponseVideo(v))
  }

  async findVideo(id: number): Promise<VideoView> {
    const video = await this.videosRepository.findVideoById(id);
    return this.buildResponseVideo(video);
  }

  async updateVideo(
    id: number,
    updateVideoDto: UpdateVideoInputModel,
  ): Promise<void> {
    await this.videosRepository.updateVideoById(id, updateVideoDto);
  }

  async removeVideo(id: number): Promise<void> {
    await this.videosRepository.deleteVideoById(id);
  }
}
