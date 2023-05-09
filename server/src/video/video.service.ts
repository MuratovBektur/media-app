import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from 'src/entities/video.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Video)
    private videoRepository: Repository<Video>,
  ) {}

  async create(video: Omit<Video, 'id' | 'video_type' | 'video_episodes'>) {
    try {
      return await this.videoRepository.save(video);
    } catch (err) {
      console.error(err);
      throw new BadRequestException({
        msg: err,
      });
    }
  }

  findAll(): Promise<Video[]> {
    try {
      return this.videoRepository.find({
        relations: ['video_type', 'video_episodes'],
      });
    } catch (err) {
      console.error(err);
      throw new BadRequestException({
        msg: err,
      });
    }
  }

  async findOne(id: number): Promise<Video> {
    const video = await this.videoRepository.findOneBy({ id });
    if (video) return video;
    throw new NotFoundException();
  }

  async remove(id: number): Promise<void> {
    await this.videoRepository.softDelete(id);
  }
}
