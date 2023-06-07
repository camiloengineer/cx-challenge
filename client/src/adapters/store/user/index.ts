import { Slice, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUser, login } from '../../services/user'; 
import { UserModelResponse } from '../../services/user/model/user.model';
import { authManager } from "infrastructure/utils/auth.utils";

const { getUserData ,saveAuthToken, saveUserData } = authManager();

// Thunk action creator
export const loginUser = createAsyncThunk<UserModelResponse, { username: string, password: string }>(
  'user/loginUser',
  async (credentials) => {
    try {
      const userData = await getUserData();
      if (userData) {
        return userData;
      }

      const tokenApi = await login(credentials.username, credentials.password);
      const user = await getUser(tokenApi);
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