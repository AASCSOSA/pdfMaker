import { Injectable } from '@nestjs/common';
import PdfPrinter from 'pdfmake';
import { DocumentTemplate } from './templates/document-template';

@Injectable()
export class PdfService {
  private readonly fonts = {
    Roboto: {
      normal: 'assets/fonts/Inter-VariableFont_opsz,wght.ttf',
      bold: 'assets/fonts/Inter_18pt-Bold.ttf',
      italics: 'assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf',
      bolditalics: 'assets/fonts/Inter_18pt-BoldItalic.ttf',
    },
  };

  private readonly printer = new PdfPrinter(this.fonts);
  async generatePdf(template: DocumentTemplate): Promise<Buffer> {
    const docDefinition = template.GenerateDocumentStructure();
    const pdfDoc = this.printer.createPdfKitDocument(docDefinition);

    return new Promise((resolve, reject) => {
      const chunks: any[] = [];
      pdfDoc.on('data', (chunk) => chunks.push(chunk));
      pdfDoc.on('end', () => resolve(Buffer.concat(chunks)));
      pdfDoc.on('error', reject);
      pdfDoc.end();
    });
  }
}
