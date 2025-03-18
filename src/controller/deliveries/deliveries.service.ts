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
          venta: 30163.62,
        },
        {
          concepto: 'Pago online',
          cantidad: 0,
          venta: 101000.0,
        },
        {
          concepto: 'Transferencia',
          cantidad: 0,
          venta: 412232.38,
        },
        {
          concepto: 'Terminal bancaria',
          cantidad: 0,
          venta: 400005.0,
        },
        {
          concepto: 'Crédito',
          cantidad: 0,
          venta: 0.0,
        },
      ],
      productsPayedWithCash: [
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
      productsPayedOnline: [
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
      productsPayedWithTransfer: [
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
      productsPayedWithBankTerminal: [
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
      productsPayedWithCredit: [
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

  async sendEmail(sellingId: string, pdfBuffer: Buffer) {}
}
