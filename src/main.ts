import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const app = await NestFactory.create(AppModule, {
    cors: 'http://localhost:8080',
  });
  await app.listen(3000);
}
bootstrap();
