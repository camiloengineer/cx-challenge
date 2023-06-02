import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class LevelDetail {
  @Field(() => ID, { description: 'The ID of the level' })
  levelId: string;

  @Field({ description: 'The description of the level' })
  description: string;
}