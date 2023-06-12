import { UserModelResponse } from "domain/entities/user.model";

export interface IUserServices {
  getUser(token?: string): Promise<UserModelResponse>;
  login(username: string, password: string): Promise<string>;
}
