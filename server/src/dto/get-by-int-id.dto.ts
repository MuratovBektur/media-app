import { Transform, Type } from 'class-transformer';
import { IsInt } from 'class-validator';

export class GetByIntIdDto {
  @IsInt()
  @Type(() => Number)
  @Transform(({ value }) => Number.parseInt(value), { toClassOnly: true })
  id: number;
}
