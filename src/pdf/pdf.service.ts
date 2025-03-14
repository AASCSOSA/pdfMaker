import { Injectable } from '@nestjs/common';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

@Injectable()
export class PdfService {
  constructor() {
    pdfMake.vfs = pdfFonts.vfs;
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
}
