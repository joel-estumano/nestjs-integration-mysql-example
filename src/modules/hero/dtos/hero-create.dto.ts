import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class HeroCreateDto {
  @ApiProperty({
    description: 'hero`s name',
    example: 'spider-man',
    required: true,
    type: String,
    minLength: 3,
    maxLength: 128
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;
}
