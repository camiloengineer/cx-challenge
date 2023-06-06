import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserLogin {
  @Field({ description: 'Username' })
  username: string;

  @Field({ description: 'Password' })
  password: string;
}
