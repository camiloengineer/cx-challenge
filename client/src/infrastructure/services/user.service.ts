import { gql } from "graphql-request";

import { UserModelResponse } from "../../domain/entities/user.model";
import { request } from "../utils/api.utils";
import { authManager } from "infrastructure/utils/auth.utils";
import { IUserServices } from "domain/ports/IUser.service";

const auth = authManager();

const GET_USER_QUERY = gql`
  query {
    user {
      id
      name
      surname
      level
      profileImage
      userRestrictions {
        type
        message
      }
      levelDetail {
        levelId
        description
      }
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    token(input: { username: $username, password: $password })
  }
`;

export class UserServices implements IUserServices {
  
  async getUser(token?: string): Promise<UserModelResponse> {
    try {
      const authToken = token ?? (await auth.getAuthToken());
      const response: any = await request(
        GET_USER_QUERY,
        undefined,
        false,
        authToken
      );
      const userData = response.user;

      const user: UserModelResponse = {
        id: userData.id,
        name: userData.name,
        surname: userData.surname,
        level: userData.level,
        profileImage: userData.profileImage,
        userRestrictions: userData.userRestrictions,
        levelDetail: userData.levelDetail,
      };

      return user;
    } catch (error) {
      console.error("Error retrieving user data:", error);
      throw error;
    }
  }

  async login(username: string, password: string): Promise<string> {
    try {
      const variables = { username, password };
      const response: any = await request(LOGIN_MUTATION, variables, true);
      const token = response.token;
      return token;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }
}
