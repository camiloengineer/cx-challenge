import { Injectable } from '@nestjs/common';

import { default as MercadoLibreService } from './../../challenge/MercadolibreService';
import { IUserDto } from 'src/models/dto/user.dto';
import { IUserRestrictionsDto } from 'src/models/dto/userRestrictions.dto';
import { ILevelDetailDto } from 'src/models/dto/levelDetail.dto';

@Injectable()
export class UserProvider {
  constructor(private readonly mercadoLibreService: MercadoLibreService) {}

  async getUserQuery(): Promise<IUserDto> {
    try {
      const result: IUserDto = await this.mercadoLibreService.getUser();
      //Encrypted Password
      result.password = "$2b$10$VaL9mdS6DLWOfLTt.giwU.Kw2J3ivkEbBFniQNQPxHck3S7NSvvxS" 
      return result;
    } catch (err) {
      console.error(`Error retrieving user: ${err}`, { err });
      throw err;
    }
  }

  async getUserRestrictionsQuery(userId: number): Promise<IUserRestrictionsDto> {
    try {
      const result: IUserRestrictionsDto = await this.mercadoLibreService.getUserRestrictions(userId);
      return result;
    } catch (err) {
      console.error(`Error retrieving user: ${err}`, { err });
      throw err;
    }
  }

  async getLevelQuery(levelId: string): Promise<ILevelDetailDto> {
    try {
      const result: ILevelDetailDto = await this.mercadoLibreService.getLevel(levelId);
      return result;
    } catch (err) {
      console.error(`Error retrieving user: ${err}`, { err });
      throw err;
    }
  }
}
