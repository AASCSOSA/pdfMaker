import { Injectable } from '@nestjs/common';

@Injectable()
export class SalesService {
  async getSaleData(saleId: string) {
    return {
      id: saleId,
      costumersname: 'Cristopher Encisoo',
      address: 'Calle #2199 - Colonia, Monterrey, Nuevo León, 77880.',
      saledate: '17/03/2023',
      status: 'Aprobada',
      products: [
        {
          description: 'Aciclovir (Aciclovir) 400 mg 35 Tab',
          quantity: 99,
        },
        {
          description: 'Aciclovir (Aciclovir) 400 mg 35 Tab',
          quantity: 99,
        },
        {
          description: 'Aciclovir/ Lidocaina (Aciclovir,Lidocaína) 5 mg/2 mg 1 Aerosol',
          quantity: 2,
        },
        {
          description: 'Aciclovir/ Lidocaina (Aciclovir,Lidocaína) 5 mg/2 mg 1 Aerosol',
          quantity: 2,
        },
        {
          description: 'Aciclovir/ Lidocaina (Aciclovir,Lidocaína) 5 mg/2 mg 1 Aerosol',
          quantity: 2,
        },
        {
          description: 'Aciclovir/ Lidocaina (Aciclovir,Lidocaína) 5 mg/2 mg 1 Aerosol',
          quantity: 2,
        },
        {
          description: 'Aciclovir/ Lidocaina (Aciclovir,Lidocaína) 5 mg/2 mg 1 Aerosol',
          quantity: 2,
        },
      ],
    };
  }
}
