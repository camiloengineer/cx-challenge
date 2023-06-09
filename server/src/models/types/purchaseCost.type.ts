import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
export class PurchaseCost {
  @Field(() => Float, { description: 'Total cost value' })
  total: number;

  @Field(() => String, { description: 'Currency' })
  currency: string;
}
