import {
  Get,
  Post,
  Controller,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from 'src/dto/create-video-dto.dto';
import { ApiParam } from '@nestjs/swagger';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'Get user by id',
  })
  findOneBy(@Param('id', ParseIntPipe) id: number) {
    return this.videoService.findOne(id);
  }

  @Get()
  findAll() {
    return this.videoService.findAll();
  }

  @Post()
  create(@Body() createVideoDto: CreateVideoDto) {
    return this.videoService.create(createVideoDto);
  }
}
