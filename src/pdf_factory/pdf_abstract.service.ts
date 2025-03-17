import { Injectable } from '@nestjs/common';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import PdfPrinter from "pdfmake";
import { TFontDictionary } from "pdfmake/interfaces";
import { DocumentFactory_Abstract } from "./factories/document.factory";

@Injectable()
export class PdfAbstractService {
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

  generateDocumentPdf(type: string, requiredId: any): PDFKit.PDFDocument {
    const sampleDataOrderForm = {
      id: requiredId,
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
    const sampleDataDeliveryOrder = {
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
    }
    const document = DocumentFactory_Abstract.createDocument(type, sampleDataOrderForm);
    const printer = new PdfPrinter(this.fonts);
    const pdfDocGenerator = printer.createPdfKitDocument(document.generateDocumentStructure());
    pdfDocGenerator.info.Title = document.getFileName();
    return pdfDocGenerator;
  }
}
