import { PartialType } from '@nestjs/mapped-types';
import { CreateQinyuDto } from './create-qinyu.dto';

export class UpdateQinyuDto extends PartialType(CreateQinyuDto) {}
