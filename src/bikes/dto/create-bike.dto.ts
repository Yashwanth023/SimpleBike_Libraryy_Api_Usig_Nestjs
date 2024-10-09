import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBikeDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  make: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  year: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  type: string;
}