import { Injectable } from '@nestjs/common';

import { ILevelDetailDto } from 'src/models/dto/levelDetail.dto';
import { IPaymentDto } from 'src/models/dto/payment.dto';
import { IShipmentDto } from 'src/models/dto/shipment.dto';
import { IUserDto } from 'src/models/dto/user.dto';
import {
  IUserPurchaseDto,
  IUserPurchasesDto,
} from 'src/models/dto/userPurchases.dto';
import { IUserRestrictionsDto } from 'src/models/dto/userRestrictions.dto';
import { IPaymentResult } from 'src/models/result/payment.result';
import { IShipmentResult } from 'src/models/result/shipment.result';
import { IUserResult } from 'src/models/result/user.result';
import { IUserPurchasesResult } from 'src/models/result/userPurchases.result';

@Injectable()
export class AutoMapper {
  private mapStatusTranslation(
    status: string,
    context: 'shipping' | 'payment',
  ): string {
    switch (status) {
      case 'completed':
        return context === 'shipping' ? 'entregado' : 'aprobado';
      case 'rejected':
        return 'rechazado';
      case 'cancelled':
        return 'cancelado';
      case 'delivered':
        return 'entregado';
      default:
        return status;
    }
  }

  private mapDescription(description: string | undefined): string {
    return description?.split('-')[0]?.trim() || '';
  }

  mapGetUser(
    user: IUserDto,
    userRestrictions: IUserRestrictionsDto,
    levelDetail: ILevelDetailDto,
  ): IUserResult {
    const result: IUserResult = {
      id: user.user_id,
      name: user.name,
      surname: user.surname,
      level: user.level,
      profileImage: user.profile_image,
      password: user.password,
      userRestrictions,
      levelDetail: {
        levelId: levelDetail.level_id,
        description: this.mapDescription(levelDetail.description),
      },
    };

    return result;
  }

  mapGetUserLogin(user: IUserDto): IUserResult {
    const result: IUserResult = {
      id: user.user_id,
      name: user.name,
      surname: user.surname,
      level: user.level.toLowerCase(),
      password: user.password,
    };

    return result;
  }

  mapGetUserPurchases(purchases: IUserPurchasesDto): IUserPurchasesResult {
    const result: IUserPurchasesResult = {
      data: purchases.data.map((purchase: IUserPurchaseDto) => {
        const purchaseDate = new Date(purchase.date);
        const formattedDate = purchaseDate.toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'long',
        });

        const amountText =
          purchase.amount === 1 ? '1 unidad' : `${purchase.amount} unidades`;

        return {
          purchaseId: purchase.purchase_id,
          title: purchase.title,
          cost: {
            total: purchase.cost.total,
            currency: purchase.cost.currency,
          },
          amount: amountText,
          date: `Llegó el ${formattedDate}`,
          image: purchase.image,
          seller: {
            id: purchase.seller.id,
            nickname: purchase.seller.nickname,
          },
          transactionId: purchase.transaction_id,
          shipmentId: purchase.shipment_id,
        };
      }),
      total: purchases.total,
      offset: purchases.offset,
      limit: purchases.limit,
    };

    return result;
  }

  mapGetShipment(shipment: IShipmentDto): IShipmentResult {
    const statusTranslation = this.mapStatusTranslation(
      shipment.status,
      'shipping',
    );
    const result: IShipmentResult = {
      shipmentId: shipment.shipment_id,
      status: statusTranslation,
    };
    return result;
  }

  mapGetPayment(payment: IPaymentDto): IPaymentResult {
    const statusTranslation = this.mapStatusTranslation(
      payment.status,
      'payment',
    );
    const result: IPaymentResult = {
      transactionId: payment.transaction_id,
      status: statusTranslation,
    };
    return result;
  }
}
