import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { VideoType } from 'src/entities/video_type.entity';
import { VideoType } from 'src/entities/video_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VideoTypeService {
  constructor(
    @InjectRepository(VideoType)
    private videoTypeRepository: Repository<VideoType>,
  ) {}

  create(user: Omit<VideoType, 'id' | 'video_list'>) {
    return this.videoTypeRepository.save(user);
  }

  findAll(): Promise<VideoType[]> {
    try {
      return this.videoTypeRepository.find({
        relations: ['video_list'],
      });
    } catch (err) {
      console.error(err);
      throw new BadRequestException({
        msg: err,
      });
    }
  }

  async findOne(id: number): Promise<VideoType> {
    const videoType = await this.videoTypeRepository.findOneBy({ id });
    if (videoType) return videoType;
    throw new NotFoundException();
  }

  async remove(id: number): Promise<void> {
    await this.videoTypeRepository.softDelete(id);
  }
}
