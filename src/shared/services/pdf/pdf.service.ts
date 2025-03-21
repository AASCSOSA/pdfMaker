import { Injectable } from '@nestjs/common';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { PdfPrinterService } from "./pdf-printer.service";

@Injectable()
export class PdfService {

  constructor(private readonly pdfPrinterService: PdfPrinterService) {

  }

  async generatePdf(docDefinition: TDocumentDefinitions): Promise<Buffer> {
    return new Promise((resolve) => {
      const pdfDoc = this.pdfPrinterService.createPdfKitDocument(docDefinition);
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
