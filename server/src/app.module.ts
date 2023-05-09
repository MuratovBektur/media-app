import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoModule } from './video/video.module';
import { VideoTypeModule } from './video_type/video_type.module';
import { VideoEpisodeModule } from './video_episode/video_episode.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: +configService.get<string>('DB_PORT'),
        database: configService.get<string>('DB_DATABASE'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        extra: {
          ssl: 'true',
        },
        synchronize: configService.get<string>('NODE_ENV') === 'dev',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
      inject: [ConfigService],
    }),
    VideoModule,
    VideoTypeModule,
    VideoEpisodeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
