import { UserModelResponse } from "adapters/services/user/model/user.model";

export const authManager = (): {
  isAuth: () => Promise<boolean>;
  loginAuth: () => Promise<void>;
  logoutAuth: () => Promise<void>;
  saveAuthToken: (token: string) => Promise<void>;
  saveUserData: (user: UserModelResponse) => Promise<void>;
  getAuthToken: () => Promise<string>;
  getUserData: () => Promise<UserModelResponse | null>;
  expireSession: () => Promise<void>;
} => {
  const isAuth = () => {
    return new Promise<boolean>((resolve) => {
      const result = localStorage.getItem("isAuthenticated");
      // Perform additional logic to validate the token
      const isAuthenticated = result === "true";

      resolve(isAuthenticated);
    });
  };

  const loginAuth = () => {
    return new Promise<void>((resolve, reject) => {
      // Perform additional logic to validate the token
      const isValidToken = true; /* Token validation logic */

      if (isValidToken) {
        // Save the token to localStorage
        localStorage.setItem("isAuthenticated", "true");
        resolve(); // Resolve the promise if the token is valid
      } else {
        reject(new Error("Invalid token")); // Reject the promise if the token is invalid
      }
    });
  };

  const logoutAuth = () => {
    return new Promise<void>((resolve) => {
      // Perform any necessary actions to clear the session
      // For example, you can make an API call to invalidate the token or clear any stored user data

      // Remove the token from localStorage
      localStorage.removeItem("isAuthenticated");

      resolve(); // Resolve the promise after clearing the session
    });
  };


  const expireSession = () => {
    return new Promise<void>((resolve) => {
      // Perform any necessary actions to clear the session
      // For example, you can make an API call to invalidate the token or clear any stored user data

      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("userData");
      localStorage.removeItem("token");

      resolve(); // Resolve the promise after clearing the session
    });
  };


  const saveAuthToken = (token: string) => {
    return new Promise<void>((resolve) => {
      localStorage.setItem("token", token);
      resolve();
    });
  };

  const saveUserData = (user: UserModelResponse) => {
    return new Promise<void>((resolve) => {
      localStorage.setItem("userData", JSON.stringify(user));
      resolve();
    });
  };

  const getAuthToken = () => {
    return new Promise<string>((resolve) => {
      const token = localStorage.getItem("token") ?? "";
      resolve(token);
    });
  };

  const getUserData = () => {
    return new Promise<UserModelResponse | null>((resolve) => {
      const userDataString = localStorage.getItem("userData");
      if (userDataString) {
        const userData: UserModelResponse = JSON.parse(userDataString);
        resolve(userData);
      } else {
        resolve(null);
      }
    });
  };

  return { isAuth, loginAuth, logoutAuth, saveAuthToken, saveUserData, getAuthToken, getUserData, expireSession };
};
