import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!111';
  }
  getCats(): string {
    return JSON.stringify('这是我的Cats111222333');
  }
}
