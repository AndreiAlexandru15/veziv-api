import { Module } from '@nestjs/common';
import { ArtworkService } from './artwork.service';
import { ArtworkController } from './artwork.controller';
import { DatabaseService } from 'src/database/database.service';

@Module({
  controllers: [ArtworkController],
  providers: [ArtworkService, DatabaseService],
})
export class ArtworkModule {}
