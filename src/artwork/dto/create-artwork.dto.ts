// src/artwork/dto/create-artwork.dto.ts
import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateArtworkDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;

  @IsOptional()
  @IsString()
  clientLink?: string;

  @IsOptional()
  @IsBoolean()
  isVisible?: boolean; // This field can be optional, defaults to true in Prisma
}
