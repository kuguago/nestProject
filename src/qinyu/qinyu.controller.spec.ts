import { Test, TestingModule } from '@nestjs/testing';
import { QinyuController } from './qinyu.controller';
import { QinyuService } from './qinyu.service';

describe('QinyuController', () => {
  let controller: QinyuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QinyuController],
      providers: [QinyuService],
    }).compile();

    controller = module.get<QinyuController>(QinyuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
