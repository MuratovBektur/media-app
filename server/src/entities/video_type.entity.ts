import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Video } from './video.entity';

@Entity('videos_types')
export class VideoType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @OneToMany(() => Video, (video) => video.video_type)
  video_list: Video[];
}
