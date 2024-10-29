import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ArtworkService } from './artwork.service';
import { CreateArtworkDto } from './dto/create-artwork.dto';
import { UpdateArtworkDto } from './dto/update-artwork.dto';
import { Artwork } from '@prisma/client';

@Controller('artworks')
export class ArtworkController {
  constructor(private readonly artworkService: ArtworkService) {}

  @Post()
  async create(@Body() createArtworkDto: Omit<Artwork, 'id' | 'createdAt' | 'updatedAt'>) {
    return this.artworkService.create(createArtworkDto);
  }

  @Get()
  async findAll() {
    return this.artworkService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.artworkService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArtworkDto: Partial<Omit<Artwork, 'id' | 'createdAt' | 'updatedAt'>>
  ) {
    return this.artworkService.update(Number(id), updateArtworkDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.artworkService.remove(Number(id));
  }
}