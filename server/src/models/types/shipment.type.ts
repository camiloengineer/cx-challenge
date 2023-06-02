import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Shipment {
  @Field(type => Int, { description: 'Shipment ID' })
  shipmentId: number;

  @Field(type => String, { description: 'Shipment status' })
  status: string;
}