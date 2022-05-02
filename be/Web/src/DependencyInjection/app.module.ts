import { Module } from '@nestjs/common';
import { HomeController } from 'src/Controllers/HomeController';
import { RenderModule } from 'nest-next';
import Next from 'next';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== 'production',
        dir: "./src"
      }), {
        viewsDir: null
      }
    )
  ],
  controllers: [HomeController],
  providers: [],
})

export class AppModule {}