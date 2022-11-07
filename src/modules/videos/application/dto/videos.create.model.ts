import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Resolutions } from '../types/enums';

export class CreateVideoInputModel {
  @IsString()
  readonly title: string;
  @IsString()
  readonly author: string;

  @IsOptional()
  @IsEnum(Resolutions)
  readonly availableResolutions: Resolutions;
}
