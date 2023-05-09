import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoEpisodeController } from './video_episode.controller';
import { VideoEpisodeService } from './video_episode.service';
import { VideoEpisode } from 'src/entities/video_episode.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoEpisode])],
  controllers: [VideoEpisodeController],
  providers: [VideoEpisodeService],
})
export class VideoEpisodeModule {
  constructor() {}
}
