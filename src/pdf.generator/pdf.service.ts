import { Injectable } from '@nestjs/common';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import PdfPrinter from "pdfmake";
import { TDocumentDefinitions, TFontDictionary } from "pdfmake/interfaces";
import { DocumentFactory_Abstract } from "./factories/document.factory";

@Injectable()
export class PdfService {
  constructor() {
    pdfMake.vfs = pdfFonts.vfs;
  }

  fonts: TFontDictionary = {
    Roboto: {
      normal: 'assets/fonts/Roboto-Regular.ttf',
      bold: 'assets/fonts/Roboto-Medium.ttf',
      italics: 'assets/fonts/Roboto-Italic.ttf',
      bolditalics: 'assets/fonts/Roboto-MediumItalic.ttf',
    }
  }

  async generatePdf(docDefinition: TDocumentDefinitions): Promise<Buffer> {

    /*const sampleDataDeliveryOrder = {
      id: requiredId,
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
    }*/
    return new Promise((resolve, reject) => {
      const printer = new PdfPrinter(this.fonts);
      const pdfDoc = printer.createPdfKitDocument(docDefinition);

      const chunks: Buffer[] = [];
      pdfDoc.on('data', (chunk) => {
        chunks.push(chunk);
      });

      pdfDoc.on('end', () => {
        const result = Buffer.concat(chunks);
        resolve(result);
      });

      pdfDoc.end();
    });
  }
}
