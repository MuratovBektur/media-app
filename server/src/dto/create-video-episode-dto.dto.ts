import { IsNumber, IsUrl } from 'class-validator';

export class CreateVideoEpisodeDto {
  @IsUrl()
  url: string;

  @IsNumber()
  episode_number: number;

  @IsNumber()
  video_id: number;
}
