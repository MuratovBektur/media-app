import { IsString } from 'class-validator';

export class CreateVideoTypeDto {
  @IsString()
  type: string;
}
