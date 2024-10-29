// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.use(cors({
    origin: 'http://localhost:3000', // Change this to your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    credentials: true, // Allow credentials (if needed)
  }));

  await app.listen(4000); // Make sure your backend is running on port 4000
}
bootstrap();
