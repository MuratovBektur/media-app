import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { VideoType } from './video_type.entity';
import { VideoEpisode } from './video_episode.entity';

@Entity('videos')
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column()
  previewUrl: string;

  @Column()
  video_type_id: number;

  @ManyToOne(() => VideoType, (video_type) => video_type.video_list, {
    nullable: false,
  })
  @JoinColumn({ name: 'video_type_id' })
  video_type: VideoType;

  @OneToMany(() => VideoEpisode, (video) => video.video)
  video_episodes: Video[];
}
