import { IsString, IsUrl, IsInt } from 'class-validator';

export class CreateVideoDto {
  @IsString()
  title: string;

  @IsString()
  desc: string;

  @IsUrl()
  previewUrl: string;

  @IsInt()
  video_type_id: number;
}
