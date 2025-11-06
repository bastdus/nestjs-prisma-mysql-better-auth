import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/src/app/app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false, // required so Better Auth can read the raw request body
  });

  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });

  await app.listen(3000);
}

bootstrap();
