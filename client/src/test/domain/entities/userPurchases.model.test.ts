import {
    UserPurchaseResponse,
    UserPurchasesResponse,
    ShipmentResponse,
    PaymentResponse,
    SelectedPurchaseResponse,
  } from 'domain/entities/userPurchases.model';
  
  describe('UserPurchaseResponse', () => {
    it('should have the correct properties', () => {
      const response: UserPurchaseResponse = {
        purchaseId: 1,
        title: 'Example Purchase',
        cost: {
          total: 10,
          currency: 'USD',
        },
        amount: '1',
        date: '2023-06-01',
        image: 'image.jpg',
        seller: {
          id: 2,
          nickname: 'seller123',
        },
        transactionId: 3,
        shipmentId: 4,
      };
  
      expect(response).toHaveProperty('purchaseId', 1);
      expect(response).toHaveProperty('title', 'Example Purchase');
      expect(response).toHaveProperty('cost', {
        total: 10,
        currency: 'USD',
      });
      expect(response).toHaveProperty('amount', '1');
      expect(response).toHaveProperty('date', '2023-06-01');
      expect(response).toHaveProperty('image', 'image.jpg');
      expect(response).toHaveProperty('seller', {
        id: 2,
        nickname: 'seller123',
      });
      expect(response).toHaveProperty('transactionId', 3);
      expect(response).toHaveProperty('shipmentId', 4);
    });
  });
  
  describe('UserPurchasesResponse', () => {
    it('should have the correct properties', () => {
      const response: UserPurchasesResponse = {
        total: 5,
        offset: 0,
        limit: 10,
        data: [
          {
            purchaseId: 1,
            title: 'Example Purchase',
            cost: {
              total: 10,
              currency: 'USD',
            },
            amount: '1',
            date: '2023-06-01',
            image: 'image.jpg',
            seller: {
              id: 2,
              nickname: 'seller123',
            },
            transactionId: 3,
            shipmentId: 4,
          },
        ],
      };
  
      expect(response).toHaveProperty('total', 5);
      expect(response).toHaveProperty('offset', 0);
      expect(response).toHaveProperty('limit', 10);
      expect(response).toHaveProperty('data', [
        {
          purchaseId: 1,
          title: 'Example Purchase',
          cost: {
            total: 10,
            currency: 'USD',
          },
          amount: '1',
          date: '2023-06-01',
          image: 'image.jpg',
          seller: {
            id: 2,
            nickname: 'seller123',
          },
          transactionId: 3,
          shipmentId: 4,
        },
      ]);
    });
  });
  
  describe('ShipmentResponse', () => {
    it('should have the correct properties', () => {
      const response: ShipmentResponse = {
        shipmentId: 1,
        status: 'Delivered',
      };
  
      expect(response).toHaveProperty('shipmentId', 1);
      expect(response).toHaveProperty('status', 'Delivered');
    });
  });
  
  describe('PaymentResponse', () => {
    it('should have the correct properties', () => {
      const response: PaymentResponse = {
        transactionId: 1,
        status: 'Paid',
      };
  
      expect(response).toHaveProperty('transactionId', 1);
      expect(response).toHaveProperty('status', 'Paid');
    });
  });
  
  describe('SelectedPurchaseResponse', () => {
    it('should have the correct properties', () => {
      const response: SelectedPurchaseResponse = {
        purchaseId: 1,
        statusShipment: 'Delivered',
        statusPayment: 'Paid',
        title: 'Example Purchase',
        cost: {
          total: 10,
          currency: 'USD',
        },
        amount: '1',
        date: '2023-06-01',
        image: 'image.jpg',
        seller: {
          id: 2,
          nickname: 'seller123',
        },
        transactionId: 3,
        shipmentId: 4,
      };
  
      expect(response).toHaveProperty('purchaseId', 1);
      expect(response).toHaveProperty('statusShipment', 'Delivered');
      expect(response).toHaveProperty('statusPayment', 'Paid');
      expect(response).toHaveProperty('title', 'Example Purchase');
      expect(response).toHaveProperty('cost', {
        total: 10,
        currency: 'USD',
      });
      expect(response).toHaveProperty('amount', '1');
      expect(response).toHaveProperty('date', '2023-06-01');
      expect(response).toHaveProperty('image', 'image.jpg');
      expect(response).toHaveProperty('seller', {
        id: 2,
        nickname: 'seller123',
      });
      expect(response).toHaveProperty('transactionId', 3);
      expect(response).toHaveProperty('shipmentId', 4);
    });
  });
  