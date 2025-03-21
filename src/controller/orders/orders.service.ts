import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  async getSellingData(sellingId: string) {
    return {
      id: sellingId,
      subtotal: 363.62,
      shipping: 100.0,
      tax: 41.38,
      total: 405.0,
      products: [
        {
          description: 'Product 1',
          unitPrice: 250.0,
          quantity: 2,
          subtotal: 500.0,
          iva: 95.0,
          total: 595.0,
        },
        {
          description: 'Product 2',
          unitPrice: 500.0,
          quantity: 1,
          subtotal: 500.0,
          iva: 95.0,
          total: 595.0,
        },
        {
          description: 'Product 2',
          unitPrice: 500.0,
          quantity: 1,
          subtotal: 500.0,
          iva: 95.0,
          total: 595.0,
        },
      ],
    };
  }

  async sendEmail(sellingId: string, pdfBuffer: any) {}
}
