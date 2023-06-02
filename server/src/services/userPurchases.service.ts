import { Injectable } from '@nestjs/common';

import { UserPurchasesProvider } from 'src/providers/userPurchases.providers';
import { AutoMapper } from './mappings/mapper.service';
import { IUserPurchasesDto } from 'src/models/dto/userPurchases.dto';
import { IUserPurchasesResult } from 'src/models/result/userPurchases.result';
import { IShipmentResult } from 'src/models/result/shipment.result';
import { IPaymentResult } from 'src/models/result/payment.result';

@Injectable()
export class UserPurchasesService {
  constructor(
    private readonly userPurchasesProvider: UserPurchasesProvider,
    private readonly mapper: AutoMapper,
  ) {}

  async getUserPurchases(
    userId: number,
    limit = 10,
    page = 1,
  ): Promise<IUserPurchasesResult> {
    try {
      let userPurchases: IUserPurchasesDto =
      await this.userPurchasesProvider.getUserPurchasesQuery(
        userId,
        limit,
        page,
      );

      const response = this.mapper.mapGetUserPurchases(userPurchases);

      return response;
    } catch (err) {
      console.error(`Error retrieving user purchases: ${err}`, { err });
      throw err;
    }
  }

  async getShipment(shipmentId: number): Promise<IShipmentResult> {
    try {

      
      const shipment = await this.userPurchasesProvider.getShipmentQuery(shipmentId);
      
      const response = this.mapper.mapGetShipment(shipment);
  
      return response;
    } catch (err) {
      console.error(`Error retrieving shipment detail: ${err}`, { err });
      throw err;
    }
  }

  async getPayment(transactionId: number): Promise<IPaymentResult> {
    try {
      const payment = await this.userPurchasesProvider.getPaymentQuery(transactionId);
  
      const response = this.mapper.mapGetPayment(payment);
  
      return response;
    } catch (err) {
      console.error(`Error retrieving payment detail: ${err}`, { err });
      throw err;
    }
  }
}
