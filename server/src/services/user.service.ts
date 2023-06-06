import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';

import { SECRET_KEY } from '../config/config';
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
      const promises: [Promise<IUserRestrictionsDto>, Promise<ILevelDetailDto>] = [
        this.userProvider.getUserRestrictionsQuery(user.user_id),
        this.userProvider.getLevelQuery(user.level),
      ];
      const [userRestrictions, levelDetail] = await Promise.all(promises);

      const response = this.mapper.mapGetUser(user, userRestrictions, levelDetail);

      return response;
    } catch (err) {
      console.error(`Error retrieving user: ${err}`, { err });
      throw err;
    }
  }

  async GetUserLogin(): Promise<IUserResult> {
    try {
      const user: IUserDto = await this.userProvider.getUserQuery();

      const response = this.mapper.mapGetUserLogin(user);

      return response;
    } catch (err) {
      console.error(`Error retrieving user: ${err}`, { err });
      throw err;
    }
  }

  async generateAuthToken(user: IUserResult): Promise<string> {
    const { id, name, surname, level } = user;

    const token = jwt.sign({ id, name, surname, level }, SECRET_KEY, { expiresIn: '1h' });

    return token;
  }
}
