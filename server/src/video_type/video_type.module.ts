import { Module } from '@nestjs/common';
import { VideoTypeController } from './video_type.controller';
import { VideoTypeService } from './video_type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoType } from 'src/entities/video_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoType])],
  controllers: [VideoTypeController],
  providers: [VideoTypeService],
})
export class VideoTypeModule {
  constructor() {}
}
