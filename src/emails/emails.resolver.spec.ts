import { Test, TestingModule } from '@nestjs/testing';
import { EmailsResolver } from './emails.resolver';
import { EmailsService } from './emails.service';

describe('EmailsResolver', () => {
  let resolver: EmailsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailsResolver, EmailsService],
    }).compile();

    resolver = module.get<EmailsResolver>(EmailsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
