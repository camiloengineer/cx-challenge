import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { User } from 'src/models/types/user.type';
import { UserService } from 'src/services/user.service';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Query(returns => User, { description: 'Get user information', nullable: true })
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
