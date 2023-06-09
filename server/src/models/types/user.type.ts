import { ObjectType, Field, Int } from '@nestjs/graphql';

import { UserRestriction } from './userRestrictions.type';
import { LevelDetail } from './levelDetail.type';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'User ID' })
  id: number;

  @Field(() => String, { description: 'User name' })
  name: string;

  @Field(() => String, { description: 'User surname' })
  surname: string;

  @Field(() => String, { description: 'User level' })
  level: string;

  @Field(() => String, { description: 'User profile image' })
  profileImage: string;

  @Field(() => [UserRestriction], { description: 'User restrictions' })
  userRestrictions: UserRestriction[];

  @Field(() => LevelDetail, { description: 'The level detail of the user' })
  levelDetail: LevelDetail;
}
