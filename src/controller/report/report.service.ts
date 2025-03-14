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
          image: 'assets/img/logo.png',
          absolutePosition: { x: 40, y: 40 },
          width: 134,
          height: 68.29,
        },
        {
          table: {
            body: [[{ text: 'Columna 1', border: [] }]],
          },
          absolutePosition: { x: 40, y: 40 },
        },
      ],
    };
    return Promise.resolve(this.printer.createPdf(docDefinition));
  }
}
