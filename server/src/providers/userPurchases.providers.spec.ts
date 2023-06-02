import { Test, TestingModule } from '@nestjs/testing';
import { UserPurchasesProvider } from './userPurchases.providers';

describe('UserPurchasesProviders', () => {
  let provider: UserPurchasesProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPurchasesProvider],
    }).compile();

    provider = module.get<UserPurchasesProvider>(UserPurchasesProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
