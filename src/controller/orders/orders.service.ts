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
          name: 'Aciclovir (Aciclovir)',
          description: 'Aciclovir (Aciclovir) 400 mg 35 Tab',
          unitPrice: 120.0,
          quantity: 2,
          subtotal: 240.00,
          iva: 38.40,
          total: 278.40,
        },
        {
          name: 'Aciclovir/ Lidocaina (Aciclovir,Lidocaína)',
          description: 'Aciclovir/ Lidocaina (Aciclovir,Lidocaína) 5 mg/2 mg 1 Aerosol',
          unitPrice: 180.0,
          quantity: 1,
          subtotal: 180.0,
          iva: 28.80,
          total: 208.80,
        }
      ],
    };
  }

  async sendEmail(sellingId: string, pdfBuffer: any) {}
}
