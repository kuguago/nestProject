import { Test, TestingModule } from '@nestjs/testing';
import { QinyuService } from './qinyu.service';

describe('QinyuService', () => {
  let service: QinyuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QinyuService],
    }).compile();

    service = module.get<QinyuService>(QinyuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
