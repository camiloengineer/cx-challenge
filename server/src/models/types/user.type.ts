import { ObjectType, Field, Int } from '@nestjs/graphql';

import { UserRestriction } from './userRestrictions.type';
import { LevelDetail } from './levelDetail.type';

@ObjectType()
export class User {
    @Field(type => Int,{ description: 'User ID'})
    id: number;

    @Field(type => String, { description: 'User name' })
    name: string;

    @Field(type => String, { description: 'User surname' })
    surname: string;

    @Field(type => String, { description: 'User level' })
    level: string;

    @Field(type => String, { description: 'User profile image' })
    profileImage: string;

    @Field(type => [UserRestriction], { description: 'User restrictions' })
    userRestrictions: UserRestriction[];

    @Field(() => LevelDetail, { description: 'The level detail of the user' })
  levelDetail: LevelDetail;
}