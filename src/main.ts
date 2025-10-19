import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply DTO Global Validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // remove properties that are not defiened in DTO
    forbidNonWhitelisted: true, // Give Error if find any unknown field
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
