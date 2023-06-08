export interface UserPurchaseResponse {
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
  data: UserPurchaseResponse[];
}

export interface ShipmentResponse {
  shipmentId: number;
  status: string;
}

export interface PaymentResponse {
  transactionId: number;
  status: string;
}

export interface SelectedPurchaseResponse {
  purchaseId: number;
  statusShipment: string;
  statusPayment: string;
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
