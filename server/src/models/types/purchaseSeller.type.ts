import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PurchaseSeller {
  @Field(() => Int, { description: 'Seller ID' })
  id: number;

  @Field(() => String, { description: 'Seller nickname' })
  nickname: string;
}
