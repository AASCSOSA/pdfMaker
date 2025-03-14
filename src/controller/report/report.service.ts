import { Injectable } from '@nestjs/common';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { PruebaService } from '../prueba/prueba.service';

@Injectable()
export class ReportService {
  constructor(private readonly printer: PruebaService) {}
  getReport(): Promise<PDFKit.PDFDocument> {
    const docDefinition: TDocumentDefinitions = {
      content: [
        {
          canvas: [
            {
              type: 'rect', // Rectángulo
              x: -40,
              y: -40,
              w: 595,
              h: 245,
              color: '#026EFA',
            },
          ],
        },
        {
          text: 'aly^',
          absolutePosition: { x: 40, y: 40 },
          color: 'white',
          fontSize: 54.03,
          bold: true,
        },
      ],
    };
    return Promise.resolve(this.printer.createPdf(docDefinition));
  }
}
