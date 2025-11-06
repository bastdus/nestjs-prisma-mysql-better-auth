import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/src/app/app.module';
import 'dotenv/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false, // required so Better Auth can read the raw request body
  });

  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });

  // All routes will be prefixed with /api
  app.setGlobalPrefix('api');

  // Swagger documentation only available in development mode
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('NestJS x Prisma x Better-Auth')
      .setDescription(
        'A simple production-ready starter template for building REST APIs with NestJS, Prisma ORM, MySQL and Better-Auth authentication.',
      )
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    const customOptions = {
      jsonDocumentUrl: 'api/docs-json',
    };
    SwaggerModule.setup('api/docs', app, document, customOptions);
  }

  await app.listen(3000);
}

void bootstrap();
