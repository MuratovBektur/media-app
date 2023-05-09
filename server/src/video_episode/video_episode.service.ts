import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVideoEpisodeDto } from 'src/dto/create-video-episode-dto.dto';
import { VideoEpisode } from 'src/entities/video_episode.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VideoEpisodeService {
  constructor(
    @InjectRepository(VideoEpisode)
    private videoEpisodeRepository: Repository<VideoEpisode>,
  ) {}

  async create(videoEpisode: CreateVideoEpisodeDto) {
    try {
      return await this.videoEpisodeRepository.save(videoEpisode);
    } catch (err) {
      console.error(err);
      throw new BadRequestException({
        msg: err,
      });
    }
  }

  findAll(): Promise<VideoEpisode[]> {
    try {
      return this.videoEpisodeRepository.find({
        relations: ['video'],
      });
    } catch (err) {
      console.error(err);
      throw new BadRequestException({
        msg: err,
      });
    }
  }

  async findOne(id: number): Promise<VideoEpisode> {
    const videoEpisode = await this.videoEpisodeRepository.findOneBy({ id });
    if (videoEpisode) return videoEpisode;
    throw new NotFoundException();
  }

  async remove(id: number): Promise<void> {
    await this.videoEpisodeRepository.softDelete(id);
  }
}
