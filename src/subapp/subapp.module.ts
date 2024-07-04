import { Module } from '@nestjs/common';
import { SubappService } from './subapp.service';
import { SubappController } from './subapp.controller';
import { PrismaService } from '../../src/prisma.service';

@Module({
  controllers: [SubappController],
  providers: [SubappService, PrismaService],
})
export class SubappModule {}
