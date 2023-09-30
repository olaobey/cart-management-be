import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('PORT');
  await app.listen(port, () =>
    console.log(
      `Cart management system app is running successfully on http://localhost:${port}`,
    ),
  );
}
bootstrap();
