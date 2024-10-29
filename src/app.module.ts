import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ArtworkModule } from './artwork/artwork.module';


@Module({
  imports: [ DatabaseModule, ArtworkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
