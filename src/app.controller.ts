import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('qinyu')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cats')
  getCats(): string {
    return this.appService.getCats();
  }
}
