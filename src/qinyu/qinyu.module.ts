import { Module } from '@nestjs/common';
import { QinyuService } from './qinyu.service';
import { QinyuController } from './qinyu.controller';

@Module({
  controllers: [QinyuController],
  providers: [QinyuService],
})
export class QinyuModule {}
