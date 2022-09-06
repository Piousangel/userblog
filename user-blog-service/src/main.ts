import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';
import { AppModule } from './app.module';
import { BaseAPIDocument } from './swagger.document';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new BaseAPIDocument().initializeOptions();
  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
