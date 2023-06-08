import { Injectable } from '@nestjs/common';

import { default as MercadoLibreService } from '../../cx-frontend-challenge/MercadolibreService';
import { IUserPurchasesDto } from 'src/models/dto/userPurchases.dto';
import { IShipmentDto } from 'src/models/dto/shipment.dto';
import { IPaymentDto } from 'src/models/dto/payment.dto';

@Injectable()
export class UserPurchasesProvider {
  constructor(private readonly mercadoLibreService: MercadoLibreService) {}

  async getUserPurchasesQuery(
    userId: number,
    limit = 10,
    page = 1,
  ): Promise<IUserPurchasesDto> {
    try {
      const result: IUserPurchasesDto =
        await this.mercadoLibreService.getUserPurchases(userId, limit, page);

      return result;
    } catch (err) {
      console.error(`Error retrieving user: ${err}`, { err });
      throw err;
    }
  }

  async getShipmentQuery(shipmentId: number): Promise<IShipmentDto> {
    try {
      const result: IShipmentDto = await this.mercadoLibreService.getShipment(shipmentId);
      return result;
    } catch (err) {
      console.error(`Error retrieving shipment: ${err}`, { err });
      throw err;
    }
  }

  async getPaymentQuery(transactionId: number): Promise<IPaymentDto> {
    try {
      const result: IPaymentDto = await this.mercadoLibreService.getPayment(transactionId);
      return result;
    } catch (err) {
      console.error(`Error retrieving payment: ${err}`, { err });
      throw err;
    }
  }
}
