import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVideoInputModel } from '../application/dto/videos.create.model';
import { UpdateVideoInputModel } from '../application/dto/videos.update.model';

import { Video } from '../domain/entities/video.entity';

@Injectable()
export class VideosRepository {
  constructor(
    @InjectRepository(Video)
    private readonly videosRepository: Repository<Video>,
  ) {}

  async saveVideo(createParams: CreateVideoInputModel): Promise<Video> {
    const newVideo = new Video();
    newVideo.title = createParams.title;
    newVideo.author = createParams.author;
    newVideo.availableResolutions = createParams.availableResolutions;
    await this.videosRepository.save(newVideo);
    return await this.findVideoById(newVideo.id);
  }

  async findVideoById(id: number): Promise<Video> {
    return await this.videosRepository.findOneBy({ id });
  }

  async findAllVideo(): Promise<Video[]> {
    return await this.videosRepository.find();
  }

  async updateVideoById(
    id: number,
    updateParams: UpdateVideoInputModel,
  ): Promise<void> {
    const video = await this.findVideoById(id);
    video.title = updateParams.title;
    video.author = updateParams.author;
    video.availableResolutions = updateParams.availableResolutions;
    video.canBeDownloaded = updateParams.canBeDownloaded;
    video.minAgeRestriction = updateParams.minAgeRestriction;
    video.publicationDate = new Date(updateParams.publicationDate);
    await this.videosRepository.save(video);
  }

  async deleteVideoById(id: number): Promise<void> {
    await this.videosRepository.delete({ id });
  }
}
