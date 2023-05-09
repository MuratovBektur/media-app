import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Video } from './video.entity';

@Entity('videos_episodes')
export class VideoEpisode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  episode_number: number;

  @Column()
  video_id: number;

  @ManyToOne(() => Video, (video) => video.video_episodes, {
    nullable: false,
  })
  @JoinColumn({ name: 'video_id' })
  video: Video;
}
