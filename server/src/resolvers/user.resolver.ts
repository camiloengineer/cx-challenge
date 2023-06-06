import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { compare } from 'bcrypt';

import { User } from 'src/models/types/user.type';
import { UserLogin } from 'src/models/types/userLogin.type';
import { UserService } from 'src/services/user.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => String, {
    name: 'token',
    description: 'Login with username and password',
    nullable: true,
  })
  async login(@Args('input') input: UserLogin): Promise<string> {
    try {
      const { password } = input;

      const user = await this.userService.GetUserLogin();

      if (!user) {
        throw new Error('User not found');
      }

      const isPasswordMatch = await compare(password, user.password);

      if (!isPasswordMatch) {
        throw new Error('Incorrect password');
      }

      const token = await this.userService.generateAuthToken(user);
      return token;
    } catch (err) {
      console.error(`Error during login: ${err}`, { err });
      throw err;
    }
  }

  @Query(() => User, {
    description: 'Get user information',
    nullable: true,
  })
  @UseGuards(new AuthGuard())
  async user() {
    try {
      const response = await this.userService.GetUser();

      return response;
    } catch (err) {
      console.error(`Error retrieving user: ${err}`, { err });
      throw err;
    }
  }
}
