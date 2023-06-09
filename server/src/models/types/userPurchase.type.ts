import { ObjectType, Field, Int } from '@nestjs/graphql';

import { PurchaseCost } from './purchaseCost.type';
import { PurchaseSeller } from './purchaseSeller.type';

@ObjectType()
export class UserPurchase {
  @Field(() => Int, { description: 'Purchase ID' })
  purchaseId: number;

  @Field(() => String, { description: 'Purchase title' })
  title: string;

  @Field(() => PurchaseCost, { description: 'Purchase cost' })
  cost: PurchaseCost;

  @Field(() => String, { description: 'Purchase amount' })
  amount: string;

  @Field(() => String, { description: 'Purchase date' })
  date: string;

  @Field(() => String, { description: 'Purchase image URL' })
  image: string;

  @Field(() => PurchaseSeller, { description: 'Purchase seller' })
  seller: PurchaseSeller;

  @Field(() => Int, { description: 'Transaction ID' })
  transactionId: number;

  @Field(() => Int, { description: 'Shipment ID' })
  shipmentId: number;
}
