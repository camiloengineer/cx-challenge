// En el archivo selectedPurchaseSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getShipment, getPayment } from '../../services/userPurchases';
import { UserPurchaseResponse, SelectedPurchaseResponse } from '../../services/userPurchases/model/userPurchases.model';

// Thunk action creator
export const setSelectedPurchase = createAsyncThunk<SelectedPurchaseResponse, UserPurchaseResponse>(
  'userPurchases/setSelectedPurchase',
  async (params) => {
    try {
      const shipment = await getShipment(params.shipmentId);
      const payment = await getPayment(params.transactionId);

      const selectedPurchaseResponse: SelectedPurchaseResponse = {
        purchaseId: params.purchaseId,
        title: params.title,
        cost: params.cost,
        amount: params.amount,
        date: params.date,
        image: params.image,
        seller: params.seller,
        transactionId: params.transactionId,
        shipmentId: params.shipmentId,
        statusShipment: shipment.status,
        statusPayment: payment.status
      }
      return selectedPurchaseResponse;
    } catch (error) {
      console.error('Error setting selected purchase:', error);
      throw error;
    }
  }
);

// Slice
const selectedPurchaseSlice = createSlice({
  name: 'selectedPurchase',
  initialState: {} as SelectedPurchaseResponse,
  reducers: {
    clearSelectedPurchase: () => {
      return {} as SelectedPurchaseResponse;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setSelectedPurchase.fulfilled, (state, action) => {
        if (Object.keys(action.payload).length === 0) {
          return {} as SelectedPurchaseResponse;
        }
        return action.payload;
      })
      .addCase(selectedPurchaseSlice.actions.clearSelectedPurchase, () => {
        return {} as SelectedPurchaseResponse;
      });
  },
});

export const { clearSelectedPurchase } = selectedPurchaseSlice.actions;
export default selectedPurchaseSlice.reducer;
