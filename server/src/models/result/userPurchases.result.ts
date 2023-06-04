import { IPaymentResult } from "./payment.result";
import { IShipmentResult } from "./shipment.result";

interface IPurchaseCostResult {
    total: number;
    currency: string;
  }
  
  interface IPurchaseSellerResult {
    id: number;
    nickname: string;
  }
  
  export interface IUserPurchaseResult {
    purchaseId: number;
    title: string;
    cost: IPurchaseCostResult;
    amount: string;
    date: string;
    image: string;
    seller: IPurchaseSellerResult;
    transactionId: number;
    shipmentId: number;
  }
  
  export interface IUserPurchasesResult {
    data: IUserPurchaseResult[];
    total: number;
    offset: number;
    limit: number;
  }
  