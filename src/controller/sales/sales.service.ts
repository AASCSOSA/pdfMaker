import { Injectable } from '@nestjs/common';

@Injectable()
export class SalesService {
  async getSaleData(saleId: string){
    return {
      id: saleId,
      subtotal: 480.0,
      IVA: 0.0,
      shipping: 30.0,
      total: 510.0,
      customersname: 'Dacero Sapi SA DE CV',
      status: 'Aprobada',
      quotenumber: '14022024C6', //14022024C6 01062024C28
      quoteday: '17/03/2023',
      quotevalidity: '17/05/2023',
      products: [
        {
          description: 'Aspirina 500mg 40 Tab.',
          barcode: '7501349028791',
          unitprice: 40.0,
          quantity: 2,
          iva: 0.0,
          total: 80.0,
        },
        {
          description: 'Paracetamol 40 tabletas 500 miligramos',
          barcode: '7898635213123',
          unitprice: 200.0,
          quantity: 2,
          iva: 0.0,
          total: 400.0,
        },
      ],
    };
  }
}
