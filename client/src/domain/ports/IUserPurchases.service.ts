import { UserPurchasesResponse, ShipmentResponse, PaymentResponse } from "domain/entities/userPurchases.model";

export interface IUserPurchasesServices {
  getUserPurchases(userId: number, limit: number, page: number): Promise<UserPurchasesResponse>;
  getShipment(shipmentId: number): Promise<ShipmentResponse>;
  getPayment(transactionId: number): Promise<PaymentResponse>;
}