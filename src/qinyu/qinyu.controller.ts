import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QinyuService } from './qinyu.service';
import { CreateQinyuDto } from './dto/create-qinyu.dto';
import { UpdateQinyuDto } from './dto/update-qinyu.dto';

@Controller('qinyu')
export class QinyuController {
  constructor(private readonly qinyuService: QinyuService) {}

  @Post()
  create(@Body() createQinyuDto: CreateQinyuDto) {
    return this.qinyuService.create(createQinyuDto);
  }

  @Get()
  findAll() {
    return this.qinyuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.qinyuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQinyuDto: UpdateQinyuDto) {
    return this.qinyuService.update(+id, updateQinyuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.qinyuService.remove(+id);
  }
}
