import { Injectable } from '@nestjs/common';

@Injectable()
export class DeliveriesService {
  async getReportData(sellingId: string) {
    return {
      id: sellingId,
      deliveryDate: '2021-10-01',
      deliveryEmployee: 'Juan Perez',
      ventaTotalDesglosadaConceptos: [
        {
          concepto: 'Pago en efectivo',
          cantidad: 0,
          venta: 30163.62
        },
        {
          concepto: 'Pago online',
          cantidad: 0,
          venta: 101000.00
        },
        {
          concepto: 'Transferencia',
          cantidad: 0,
          venta: 412232.38
        },
        {
          concepto: 'Terminal bancaria',
          cantidad: 0,
          venta: 400005.00
        },
        {
          concepto: 'Crédito',
          cantidad: 0,
          venta: 0.00
        },
      ],
      productsPayedWithCash: [
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
      ],
      productsPayedOnline: [
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
      ],
      productsPayedWithTransfer: [
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
      ],
      productsPayedWithBankTerminal: [
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
      ],
      productsPayedWithCredit: [
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
    }
  }

  async sendEmail(sellingId: string, pdfBuffer: Buffer) {

  }
}
