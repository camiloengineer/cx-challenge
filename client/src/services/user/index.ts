import { gql } from "graphql-request";
import { UserModel } from "./model/user.model";
import { request } from "../../utils/api.utils";

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
    token(input: {
      username: $username,
      password: $password
    })
  }
`;

export async function getUser(token: string): Promise<UserModel> {
  try {
    const response: any = await request(GET_USER_QUERY, undefined, false, token);
    const userData = response.user;


    const user: UserModel = {
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

export async function login(username: string, password: string): Promise<string> {
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
