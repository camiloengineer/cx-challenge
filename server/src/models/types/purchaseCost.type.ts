import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class PurchaseCost {
  @Field(type => Float, { description: 'Total cost value' })
  total: number;

  @Field(type => String, { description: 'Currency' })
  currency: string;
}