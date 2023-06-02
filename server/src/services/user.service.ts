import { Injectable } from '@nestjs/common';

import { AutoMapper } from './mappings/mapper.service';
import { UserProvider } from 'src/providers/user.provider';
import { IUserDto } from 'src/models/dto/user.dto';
import { IUserRestrictionsDto } from 'src/models/dto/userRestrictions.dto';
import { ILevelDetailDto } from 'src/models/dto/levelDetail.dto';
import { IUserResult } from 'src/models/result/user.result';

@Injectable()
export class UserService {
  constructor(private readonly userProvider: UserProvider,
    private readonly mapper: AutoMapper) {}

  async GetUser(): Promise<IUserResult> {
    try {
      const user: IUserDto = await this.userProvider.getUserQuery();
      const restrictions: IUserRestrictionsDto = await this.userProvider.getUserRestrictionsQuery(user.user_id);
      const levelDetail: ILevelDetailDto =await this.userProvider.getLevelQuery(user.level);

      const response = this.mapper.mapGetUser(user, restrictions, levelDetail);

      return response;
    } catch (err) {
      console.error(`Error retrieving user: ${err}`, { err });
      throw err;
    }
  }
}
