import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { QinyuModule } from './qinyu/qinyu.module';

@Module({
  imports: [ConfigModule.forRoot(), QinyuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
