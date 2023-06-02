import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

import { PurchaseCost } from './purchaseCost.type';
import { PurchaseSeller } from './purchaseSeller.type';
import { Shipment } from './Shipment.type';
import { Payment } from './payment.type';

@ObjectType()
export class UserPurchase {
  @Field(type => Int, { description: 'Purchase ID' })
  purchaseId: number;

  @Field(type => String, { description: 'Purchase title' })
  title: string;

  @Field(type => PurchaseCost, { description: 'Purchase cost' })
  cost: PurchaseCost;

  @Field(type => Int, { description: 'Purchase amount' })
  amount: number;

  @Field(type => String, { description: 'Purchase date' })
  date: string;

  @Field(type => String, { description: 'Purchase image URL' })
  image: string;

  @Field(type => PurchaseSeller, { description: 'Purchase seller' })
  seller: PurchaseSeller;

  @Field(type => Int, { description: 'Transaction ID' })
  transactionId: number;

  @Field(type => Int, { description: 'Shipment ID' })
  shipmentId: number;
}