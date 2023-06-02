import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { UserPurchase } from './userPurchase.type';

@ObjectType()
export class UserPurchases {
  @Field(type => Int, { description: 'Total number of purchases' })
  total: number;

  @Field(type => Int, { description: 'Offset value' })
  offset: number;

  @Field(type => Int, { description: 'Limit value' })
  limit: number;

  @Field(type => [UserPurchase], { description: 'List of user purchases' })
  data: UserPurchase[];
}