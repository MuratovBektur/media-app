import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config({ path: `/etc/secrets/.env` });

const PORT = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Your title')
    .setDescription('Your description')
    .setVersion('1.0')
    .addTag('Your tag')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`/explorer`, app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  await app.listen(PORT);
}
bootstrap();
