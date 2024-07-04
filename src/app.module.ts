import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import { SubappModule } from './subapp/subapp.module';
import { VersionModule } from './version/version.module';

@Module({
  imports: [ConfigModule.forRoot(), SubappModule, VersionModule],
  controllers: [AppController],
  providers: [UserService, PostService, PrismaService],
})
export class AppModule {}
