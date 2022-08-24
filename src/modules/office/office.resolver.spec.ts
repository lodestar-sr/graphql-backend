import { Test, TestingModule } from '@nestjs/testing';
import { OfficeResolver } from './office.resolver';
import { OfficeService } from './office.service';

describe('OfficeResolver', () => {
  let resolver: OfficeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfficeResolver, OfficeService],
    }).compile();

    resolver = module.get<OfficeResolver>(OfficeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
