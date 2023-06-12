import { Slice, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserServices } from 'infrastructure/services/user.service'; 
import { UserModelResponse } from '../../domain/entities/user.model';
import { authManager } from "infrastructure/utils/auth.utils";
import { IUserServices } from 'domain/ports/IUser.service';

const { getUserData ,saveAuthToken, saveUserData } = authManager();
const userServices: IUserServices = new UserServices();

// Thunk action creator
export const loginUser = createAsyncThunk<UserModelResponse, { username: string, password: string }>(
  'user/loginUser',
  async (credentials) => {
    try {
      const userData = await getUserData();
      if (userData) {
        return userData;
      }

      const tokenApi = await userServices.login(credentials.username, credentials.password);
      const user = await userServices.getUser(tokenApi);
      await saveAuthToken(tokenApi);
      await saveUserData(user);

      return user;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }
);

// Slice
const userSlice: Slice<UserModelResponse> = createSlice({
  name: 'user',
  initialState: {} as UserModelResponse,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default userSlice.reducer;