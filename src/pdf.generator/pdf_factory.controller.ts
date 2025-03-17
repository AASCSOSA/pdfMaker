import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from "express";
import { PdfService } from "./pdf.service";

@Controller('pdf-factory')
export class PdfFactoryController {

  constructor(private readonly pdfService: PdfService) {
  }

 /* @Get('/delivery/reports/:deliveryId')
  async getFgoDeliveryReport(@Param('deliveryId') deliveryId: string, @Res() res: Response) {

    try {
      const pdfDoc = this.pdfService.generateDocumentPdf('deliveryReport', deliveryId);
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
  };

  @Get('/orders/form/:orderId')
  async getAllyOrderForm(@Param('orderId') orderId: string, @Res() res: Response) {
    try {
      const pdfDoc = this.pdfService.generateDocumentPdf('orderForm', orderId);
      const chunks: Uint8Array[] = [];
      pdfDoc.on('data', (chunk) => chunks.push(chunk));
      pdfDoc.on('end', () => {
        const pdfBuffer = Buffer.concat(chunks);
        res.set({
          'Content-Type': 'application/pdf',
          'Content-Disposition': `inline; filename="delivery-report-${orderId}.pdf"`,
        });
        res.send(pdfBuffer);
      });
      pdfDoc.end();
    } catch {
      res.status(500).send('Error to generate PDF');
    }
  }*/
}
