import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserPurchase } from './userPurchase.type';

@ObjectType()
export class UserPurchases {
  @Field(() => Int, { description: 'Total number of purchases' })
  total: number;

  @Field(() => Int, { description: 'Offset value' })
  offset: number;

  @Field(() => Int, { description: 'Limit value' })
  limit: number;

  @Field(() => [UserPurchase], { description: 'List of user purchases' })
  data: UserPurchase[];
}
