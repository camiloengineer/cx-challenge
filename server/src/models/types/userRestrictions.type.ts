import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserRestriction {
  @Field(type => String, { description: 'Restriction type' })
  type: string;

  @Field(type => String, { description: 'Restriction message' })
  message: string;
}