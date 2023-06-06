import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { Shipment } from 'src/models/types/Shipment.type';
import { Payment } from 'src/models/types/payment.type';
import { UserPurchases } from 'src/models/types/userPurchases.type';
import { UserPurchasesService } from 'src/services/userPurchases.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Resolver()
export class UserPurchasesResolver {
  constructor(private readonly userPurchasesService: UserPurchasesService) {}

  @Query(_ => UserPurchases, { description: 'Get user purchases', nullable: true })
  @UseGuards(new AuthGuard())
  async userPurchases(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('limit', { type: () => Int, defaultValue: 10 }) limit: number,
    @Args('page', { type: () => Int, defaultValue: 1 }) page: number,
  ) {
    try {
      const response = await this.userPurchasesService.getUserPurchases(userId, limit, page);

      return response;
    } catch (err) {
      console.error(`Error retrieving user purchases: ${err}`, { err });
      throw err;
    }
  }

  @Query( _ => Shipment, { description: 'Get shipment detail', nullable: true })
  @UseGuards(new AuthGuard())
  async shipment(
    @Args('shipmentId', { type: () => Int }) shipmentId: number,
  ) {
    try {
      const response = await this.userPurchasesService.getShipment(shipmentId);

      return response;
    } catch (err) {
      console.error(`Error retrieving shipment detail: ${err}`, { err });
      throw err;
    }
  }

  @Query(_ => Payment, { description: 'Get payment detail', nullable: true })
  @UseGuards(new AuthGuard())
  async payment(
    @Args('transactionId', { type: () => Int }) transactionId: number,
  ) {
    try {
      const response = await this.userPurchasesService.getPayment(transactionId);

      return response;
    } catch (err) {
      console.error(`Error retrieving payment detail: ${err}`, { err });
      throw err;
    }
  }
}