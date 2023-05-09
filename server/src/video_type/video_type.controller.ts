import {
  Get,
  Post,
  Controller,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { VideoTypeService } from './video_type.service';
import { CreateVideoTypeDto } from 'src/dto/create-video-type-dto.dto';
import { ApiParam } from '@nestjs/swagger';

@Controller('video-type')
export class VideoTypeController {
  constructor(private readonly videoTypeService: VideoTypeService) {}

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'Get user by id',
  })
  findOneBy(@Param('id', ParseIntPipe) id: number) {
    return this.videoTypeService.findOne(id);
  }

  @Get()
  findAll() {
    return this.videoTypeService.findAll();
  }

  @Post()
  create(@Body() createVideoTypeDto: CreateVideoTypeDto) {
    return this.videoTypeService.create(createVideoTypeDto);
  }
}
