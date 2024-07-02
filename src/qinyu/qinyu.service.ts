import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateQinyuDto } from './dto/create-qinyu.dto';
import { UpdateQinyuDto } from './dto/update-qinyu.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class QinyuService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createQinyuDto: CreateQinyuDto) {
    return 'This action adds a new qinyu';
  }

  findAll() {
    return `This action returns all qinyu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qinyu`;
  }

  update(id: number, updateQinyuDto: UpdateQinyuDto) {
    return `This action updates a #${id} qinyu`;
  }

  remove(id: number) {
    return `This action removes a #${id} qinyu`;
  }
}
