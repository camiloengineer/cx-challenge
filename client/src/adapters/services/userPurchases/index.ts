import { gql } from "graphql-request";
import { useNavigate } from "react-router-dom";

import { UserPurchasesResponse, UserPurchaseModel } from "./model/userPurchases.model";
import { request } from "../../../infrastructure/utils/api.utils";
import { authManager } from "infrastructure/utils/auth.utils";

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

export async function getUserPurchases(userId: number, limit: number, page: number): Promise<UserPurchasesResponse> {
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
          const purchase: UserPurchaseModel = {
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

