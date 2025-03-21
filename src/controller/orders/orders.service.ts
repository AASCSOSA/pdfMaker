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
          description: 'Bonazin 1ml   (Meclozina, Piridoxina, Lidocaína, Meclozina, Piridoxina, Lidocaína ) 25 mg/50 mg/20 mg/25 mg/50 mg/20 mg  1 Solucion Inyectable',
          unitPrice: 120.0,
          quantity: 2,
          subtotal: 240.00,
          iva: 38.40,
          total: 278.40,
        },
        {
          name: 'Aciclovir/ Lidocaina (Aciclovir,Lidocaína)',
          description: 'Melox Noche Gastritis + Reflujo 360 ml (Carbonato de Magnesio,  Carbonato de calcio ) 3.5 g/1.5 g  1 Suspensión',
          unitPrice: 180.0,
          quantity: 1,
          subtotal: 180.0,
          iva: 28.80,
          total: 208.80,
        },
        {
          name: 'Aciclovir/ Lidocaina (Aciclovir,Lidocaína)',
          description: 'Melox Noche Gastritis + Reflujo 360 ml (Carbonato de Magnesio,  Carbonato de calcio ) 3.5 g/1.5 g  1 Suspensión',
          unitPrice: 180.0,
          quantity: 1,
          subtotal: 180.0,
          iva: 28.80,
          total: 208.80,
        },
        {
          name: 'Aciclovir/ Lidocaina (Aciclovir,Lidocaína)',
          description: 'Melox Noche Gastritis + Reflujo 360 ml (Carbonato de Magnesio,  Carbonato de calcio ) 3.5 g/1.5 g  1 Suspensión',
          unitPrice: 180.0,
          quantity: 1,
          subtotal: 180.0,
          iva: 28.80,
          total: 208.80,
        },
        {
          name: 'Aciclovir/ Lidocaina (Aciclovir,Lidocaína)',
          description: 'Melox Noche Gastritis + Reflujo 360 ml (Carbonato de Magnesio,  Carbonato de calcio ) 3.5 g/1.5 g  1 Suspensión',
          unitPrice: 180.0,
          quantity: 1,
          subtotal: 180.0,
          iva: 28.80,
          total: 208.80,
        },
        {
          name: 'Aciclovir/ Lidocaina (Aciclovir,Lidocaína)',
          description: 'Melox Noche Gastritis + Reflujo 360 ml (Carbonato de Magnesio,  Carbonato de calcio ) 3.5 g/1.5 g  1 Suspensión',
          unitPrice: 180.0,
          quantity: 1,
          subtotal: 180.0,
          iva: 28.80,
          total: 208.80,
        },
        {
          name: 'Aciclovir/ Lidocaina (Aciclovir,Lidocaína)',
          description: 'Melox Noche Gastritis + Reflujo 360 ml (Carbonato de Magnesio,  Carbonato de calcio ) 3.5 g/1.5 g  1 Suspensión',
          unitPrice: 180.0,
          quantity: 1,
          subtotal: 180.0,
          iva: 28.80,
          total: 208.80,
        },
        {
          name: 'Aciclovir/ Lidocaina (Aciclovir,Lidocaína)',
          description: 'Melox Noche Gastritis + Reflujo 360 ml (Carbonato de Magnesio,  Carbonato de calcio ) 3.5 g/1.5 g  1 Suspensión',
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
