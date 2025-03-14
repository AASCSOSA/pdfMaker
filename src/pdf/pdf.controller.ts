import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('generate')
  async generatePdf(@Res() res: Response) {
    try {
      const pdfBuffer = await this.pdfService.generatePdf();
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="document.pdf"',
      });
      res.send(pdfBuffer); // Enviar el PDF como respuesta
    } catch {
      res.status(500).send('Error al generar el PDF');
    }
  }

  @Get('fgo/delivery/reports/:deliveryId')
  async getFgoDeliveryReport(@Param('deliveryId') deliveryId: string, @Res() res: Response) {
    try {
      const pdfDoc = this.pdfService.generateDeliveryReportPdf(deliveryId);
      const chunks: Uint8Array[] = [];
      pdfDoc.on('data', (chunk) => chunks.push(chunk));
      pdfDoc.on('end', () => {
        const pdfBuffer = Buffer.concat(chunks);
        res.set({
          'Content-Type': 'application/pdf',
          'Content-Disposition': `inline; filename="delivery-report-${deliveryId}.pdf"`,
        });
        res.send(pdfBuffer);
      });
      pdfDoc.end();
    } catch {
      res.status(500).send('Error to generate PDF');
    }
  }
}
