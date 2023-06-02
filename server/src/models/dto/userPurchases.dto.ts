import { IPaymentDto } from "./payment.dto";
import { IShipmentDto } from "./shipment.dto";

interface IPurchaseCostDto {
  total: number;
  currency: string;
}

interface IPurchaseSellerDto {
  id: number;
  nickname: string;
}

export interface IUserPurchaseDto {
  purchase_id: number;
  title: string;
  cost: IPurchaseCostDto;
  amount: number;
  date: string;
  image: string;
  seller: IPurchaseSellerDto;
  transaction_id: number;
  shipment_id: number;
}

export interface IUserPurchasesDto {
    total: number;
    offset: number;
    limit: number;
    data: IUserPurchaseDto[];
  }
  
