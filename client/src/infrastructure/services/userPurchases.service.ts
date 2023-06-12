import { UserPurchaseResponse, UserPurchasesResponse, ShipmentResponse, PaymentResponse } from 'domain/entities/userPurchases.model';
import { gql } from "graphql-request";
import { request } from "../utils/api.utils";
import { authManager } from "infrastructure/utils/auth.utils";
import { IUserPurchasesServices } from "domain/ports/IUserPurchases.service";

const { getAuthToken } = authManager();

const GET_USER_PURCHASES_QUERY = gql`
  query GetUserPurchases($userId: Int!, $limit: Int!, $page: Int!) {
    userPurchases(userId: $userId, limit: $limit, page: $page) {
      total
      offset
      limit
      data {
        purchaseId
        title
        cost {
          total
          currency
        }
        amount
        date
        image
        seller {
          id
          nickname
        }
        transactionId
        shipmentId
      }
    }
  }
`;

const GET_SHIPMENT_QUERY = gql`
  query GetShipment($shipmentId: Int!) {
    shipment(shipmentId: $shipmentId) {
      shipmentId
      status
    }
  }
`;

const GET_PAYMENT_QUERY = gql`
  query GetPayment($transactionId: Int!) {
    payment(transactionId: $transactionId) {
      transactionId
      status
    }
  }
`;

export class UserPurchasesServices implements IUserPurchasesServices {

  async getUserPurchases(userId: number, limit: number, page: number): Promise<UserPurchasesResponse> {
  try {
    const authToken = await getAuthToken();
    const variables = { userId, limit, page };
    const response: any = await request(GET_USER_PURCHASES_QUERY, variables, false, authToken);
    const userPurchasesData = response.userPurchases;

    const userPurchases: UserPurchasesResponse = {
      total: userPurchasesData.total,
      offset: userPurchasesData.offset,
      limit: userPurchasesData.limit,
      data: userPurchasesData.data.map((purchaseData: any) => {
        const purchase: UserPurchaseResponse = {
          purchaseId: purchaseData.purchaseId,
          title: purchaseData.title,
          cost: {
            total: purchaseData.cost.total,
            currency: purchaseData.cost.currency,
          },
          amount: purchaseData.amount,
          date: purchaseData.date,
          image: purchaseData.image,
          seller: {
            id: purchaseData.seller.id,
            nickname: purchaseData.seller.nickname,
          },
          transactionId: purchaseData.transactionId,
          shipmentId: purchaseData.shipmentId,
        };

        return purchase;
      }),
    };

    return userPurchases;
  } catch (error) {
    console.error("Error retrieving user purchases:", error);
    throw error;
  }
}

async getShipment(shipmentId: number): Promise<ShipmentResponse> {
  try {
    const authToken = await getAuthToken();
    const variables = { shipmentId };
    const response: any = await request(GET_SHIPMENT_QUERY, variables, false, authToken);
    const shipment: ShipmentResponse = response.shipment;

    return shipment;
  } catch (error) {
    console.error("Error retrieving shipment details:", error);
    throw error;
  }
}

async getPayment(transactionId: number): Promise<PaymentResponse> {
  try {
    const authToken = await getAuthToken();
    const variables = { transactionId };
    const response: any = await request(GET_PAYMENT_QUERY, variables, false, authToken);
    const payment: PaymentResponse = response.payment;

    return payment;
  } catch (error) {
    console.error("Error retrieving payment details:", error);
    throw error;
  }
}
}
