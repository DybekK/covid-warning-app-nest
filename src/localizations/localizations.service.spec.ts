import { Test, TestingModule } from '@nestjs/testing';
import { LocalizationsService } from './localizations.service';

describe('LocalizationsService', () => {
  let service: LocalizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalizationsService],
    }).compile();

    service = module.get<LocalizationsService>(LocalizationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
