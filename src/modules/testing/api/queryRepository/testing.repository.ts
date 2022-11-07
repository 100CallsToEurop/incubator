import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from 'src/modules/videos/domain/entities/video.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestingQueryRepository {
  constructor(
    @InjectRepository(Video)
    private readonly templatesRepository: Repository<Video>,
  ) {}

  async deleteAll() {
    return await this.templatesRepository.clear();
  }
}
