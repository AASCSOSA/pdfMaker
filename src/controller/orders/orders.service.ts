import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  async getSellingData(sellingId: string) {
    return {
      id: sellingId,
      subtotal: 1000.00,
      shipping: 150.00,
      tax: 190.00,
      total: 1340.00,
      products: [
        {
          description: 'Product 1',
          unitPrice: 250.00,
          quantity: 2,
          subtotal: 500.00,
          iva: 95.00,
          total: 595.00
        },
        {
          description: 'Product 2',
          unitPrice: 500.00,
          quantity: 1,
          subtotal: 500.00,
          iva: 95.00,
          total: 595.00
        },
        {
          description: 'Product 2',
          unitPrice: 500.00,
          quantity: 1,
          subtotal: 500.00,
          iva: 95.00,
          total: 595.00
        },
      ]
    };
  }

  async sendEmail(sellingId: string, pdfBuffer: any) {

  }
}
