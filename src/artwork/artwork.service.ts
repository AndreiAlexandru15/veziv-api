// src/artwork/artwork.service.ts
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service'; // Adjust the path as needed
import { Artwork } from '@prisma/client';

@Injectable()
export class ArtworkService {
  constructor(private database: DatabaseService) {}

  async create(data: Omit<Artwork, 'id' | 'createdAt' | 'updatedAt'>): Promise<Artwork> {
    return this.database.artwork.create({ data });
  }

  async findAll(): Promise<Artwork[]> {
    return this.database.artwork.findMany({
      where: {
        isVisible: true, 
      },
    });
  }

  async findOne(id: number): Promise<Artwork | null> {
    return this.database.artwork.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Partial<Omit<Artwork, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Artwork> {
    return this.database.artwork.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Artwork> {
    return this.database.artwork.delete({
      where: { id },
    });
  }
}
