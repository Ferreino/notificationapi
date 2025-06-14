import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FRONTEND_URL || '*', // Cambia esto al origen de tu frontend
  });

const port = process.env.PORT || 3000;
  await app.listen(port);}
bootstrap();
