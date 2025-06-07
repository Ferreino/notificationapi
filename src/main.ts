import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Obtén la URL del frontend desde las variables de entorno
  const frontendUrl = process.env.FRONTEND_URL;

  // Habilita CORS permitiendo solo el origen especificado
  app.enableCors({
    origin: frontendUrl,
    credentials: true, // si usas cookies o auth headers
  });

  await app.listen(3000);
}
bootstrap();
