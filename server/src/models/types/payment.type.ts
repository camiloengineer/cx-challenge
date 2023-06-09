import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Payment {
  @Field(() => Int, { description: 'Transaction ID' })
  transactionId: number;

  @Field(() => String, { description: 'Transaction status' })
  status: string;
}
