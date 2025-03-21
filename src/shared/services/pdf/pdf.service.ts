import { Injectable } from '@nestjs/common';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import PdfPrinter from "pdfmake";
import { PdfFonts } from "../../../styles/fonts";

@Injectable()
export class PdfService {
  constructor() {}

  async generatePdf(docDefinition: TDocumentDefinitions): Promise<Buffer> {
    return new Promise((resolve) => {
      const printer = new PdfPrinter(PdfFonts);
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
