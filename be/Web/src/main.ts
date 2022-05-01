import { NestFactory } from '@nestjs/core';
import { AppModule } from './DependencyInjection/app.module';
import { RenderModule } from 'nest-next';
import Next from 'next';

const bootstrap = async () => {
  const app = Next({
    dev: process.env.NODE_ENV !== 'production',
  })

  await app.prepare();

  const server = await NestFactory.create(AppModule);

  const renderer = server.get(RenderModule);
  renderer.register(server, app);

  await server.listen(3000);
}

bootstrap();
