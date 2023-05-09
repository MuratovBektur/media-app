import {
  Get,
  Post,
  Controller,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { VideoEpisodeService } from './video_episode.service';
import { CreateVideoEpisodeDto } from 'src/dto/create-video-episode-dto.dto';
import { ApiParam } from '@nestjs/swagger';

@Controller('video-episode')
export class VideoEpisodeController {
  constructor(private readonly videoEpisodeService: VideoEpisodeService) {}

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'Get user by id',
  })
  findOneBy(@Param('id', ParseIntPipe) id: number) {
    return this.videoEpisodeService.findOne(id);
  }

  @Get()
  findAll() {
    return this.videoEpisodeService.findAll();
  }

  @Post()
  create(@Body() createVideoEpisodeDto: CreateVideoEpisodeDto) {
    return this.videoEpisodeService.create(createVideoEpisodeDto);
  }
}
