import { Module } from '@nestjs/common';
import { HomeController } from 'src/Controllers/HomeController';
import { RenderModule } from 'nest-next';

@Module({
  imports: [RenderModule],
  controllers: [HomeController],
  providers: [],
})

export class AppModule {}