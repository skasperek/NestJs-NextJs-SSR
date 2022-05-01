import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class HomeController {

  @Get()
  @Render('Index')
  getHello() {
    return {
      title: 'Nest with Next',
    };
  }
}