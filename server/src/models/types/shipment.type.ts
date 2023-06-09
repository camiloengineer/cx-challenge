import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Shipment {
  @Field(() => Int, { description: 'Shipment ID' })
  shipmentId: number;

  @Field(() => String, { description: 'Shipment status' })
  status: string;
}
