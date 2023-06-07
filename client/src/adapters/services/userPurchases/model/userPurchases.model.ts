export interface UserPurchaseModel {
    purchaseId: number;
    title: string;
    cost: {
      total: number;
      currency: string;
    };
    amount: string;
    date: string;
    image: string;
    seller: {
      id: number;
      nickname: string;
    };
    transactionId: number;
    shipmentId: number;
  }
  
  export interface UserPurchasesResponse {
    total: number;
    offset: number;
    limit: number;
    data: UserPurchaseModel[];
  }
  