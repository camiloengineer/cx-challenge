import { ILevelDetailResult } from '../result/level.result';
import { IUserRestrictionsResult } from '../result/userRestrictions.result';

export interface IUserResult {
  id: number;
  name: string;
  surname: string;
  level: string;
  password: string;
  profileImage?: string;
  userRestrictions?: IUserRestrictionsResult;
  levelDetail?: ILevelDetailResult;
}
