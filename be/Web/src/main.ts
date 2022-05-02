import { NestFactory } from '@nestjs/core';
import { AppModule } from './DependencyInjection/app.module';

const bootstrap = async () => {

  const server = await NestFactory.create(AppModule);

  await server.listen(3000);
}

bootstrap();
