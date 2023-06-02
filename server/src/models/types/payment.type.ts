import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Payment {
  @Field(type => Int, { description: 'Transaction ID' })
  transactionId: number;

  @Field(type => String, { description: 'Transaction status' })
  status: string;
}