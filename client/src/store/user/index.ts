import { Slice, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUser, login } from '../../services/user'; 
import { UserModel } from '../../services/user/model/user.model';

export const loginUser = createAsyncThunk<UserModel, { username: string, password: string }>(
  'user/loginUser',
  async (credentials) => {
    try {
      const userData = localStorage.getItem('userData');
      if (userData) {
        const user = JSON.parse(userData);
        return user;
      }

      const tokenApi = await login(credentials.username, credentials.password);
      const user = await getUser(tokenApi);

      console.log("tokenApi",tokenApi);
      console.log("user", user)
      
      localStorage.setItem('token', tokenApi);
      localStorage.setItem('userData', JSON.stringify(user));

      return user;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }
);

// Slice
const userSlice: Slice<UserModel> = createSlice({
  name: 'user',
  initialState: {} as UserModel,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});



export default userSlice.reducer;