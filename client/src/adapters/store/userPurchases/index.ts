import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserPurchases } from '../../services/userPurchases';
import { UserPurchasesResponse } from '../../services/userPurchases/model/userPurchases.model';

// Thunk action creator
export const fetchUserPurchases = createAsyncThunk<UserPurchasesResponse, { userId: number, limit: number, page: number }>(
  'userPurchases/fetchUserPurchases',
  async (params) => {
    try {
      const userPurchases = await getUserPurchases(params.userId, params.limit, params.page);
      return userPurchases;
    } catch (error) {
      console.error('Error fetching user purchases:', error);
      throw error;
    }
  }
);

// Slice
const userPurchasesSlice = createSlice({
  name: 'userPurchases',
  initialState: {} as UserPurchasesResponse,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserPurchases.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});


export default userPurchasesSlice.reducer;