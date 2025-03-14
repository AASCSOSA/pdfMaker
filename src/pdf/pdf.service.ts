import { Injectable } from '@nestjs/common';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import PdfPrinter from "pdfmake";
import { DeliveryReport } from "./classes/fgo/delivery/delivery-report";

@Injectable()
export class PdfService {
  constructor() {
    pdfMake.vfs = pdfFonts.vfs;
  }

  fonts = {
    Roboto: {
      normal: 'assets/fonts/Roboto-Regular.ttf',
      bold: 'assets/fonts/Roboto-Medium.ttf',
      italics: 'assets/fonts/Roboto-Italic.ttf',
      bolditalics: 'assets/fonts/Roboto-MediumItalic.ttf',
    }
  }

  async generatePdf(): Promise<Buffer> {
    // Definir el contenido del PDF
    const documentDefinition = {
      content: [
        { text: 'Hello World', fontSize: 15, bold: true, font: 'Times' },
        { text: 'Este es un PDF generado con pdfmake en NestJS', fontSize: 12 },
        {
          text: 'Lista de ejemplo:',
          fontSize: 14,
          bold: true,
          font: 'Times',
        },
        {
          ul: ['Item 1', 'Item 2', 'Item 3'],
        },
      ],
      defaultStyle: {
        font: 'Times', // Usa Times como fuente por defecto
      },
    };
    return new Promise((resolve, reject) => {
      // Generar el PDF en un buffer
      const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
      pdfDocGenerator.getBuffer((buffer) => {
        if (buffer) {
          resolve(buffer); // Devuelve el buffer del PDF
        } else {
          reject(new Error('Error al generar el PDF'));
        }
      });
    });
  }

  generateDeliveryReportPdf(deliveryId: string): PDFKit.PDFDocument {
    //Aquí se mandaria el objeto yo creo, pero mientras coloco el ID como representativo
    //Pero como tal se haria una consulta a bd
    const doc = new DeliveryReport(deliveryId);
    const printer = new PdfPrinter(this.fonts);
    const pdfDocGenerator = printer.createPdfKitDocument(doc.generateDocumentStructure());
    return pdfDocGenerator;
  }
}
