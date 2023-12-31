import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  @Type()
  limit: number;

  @IsOptional()
  @IsPositive()
  @Type()
  offset: number;
}
