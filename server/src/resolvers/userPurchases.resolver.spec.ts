import { Test, TestingModule } from '@nestjs/testing';
import { UserPurchasesResolver } from './userPurchases.resolver';

describe('UserPurchasesResolver', () => {
  let resolver: UserPurchasesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPurchasesResolver],
    }).compile();

    resolver = module.get<UserPurchasesResolver>(UserPurchasesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
