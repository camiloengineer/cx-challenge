import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PurchaseSeller {
  @Field(type => Int, { description: 'Seller ID' })
  id: number;

  @Field(type => String, { description: 'Seller nickname' })
  nickname: string;
}