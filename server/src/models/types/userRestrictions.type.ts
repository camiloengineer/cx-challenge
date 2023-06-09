import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserRestriction {
  @Field(() => String, { description: 'Restriction type' })
  type: string;

  @Field(() => String, { description: 'Restriction message' })
  message: string;
}
