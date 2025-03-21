import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { PdfService } from '../../shared/services/pdf/pdf.service';
import { Response } from 'express';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { DocumentFactory, DocumentType } from '../../shared/factories/document.factory';
import { DeliveriesService } from './deliveries.service';

@Controller('deliveries')
export class DeliveriesController {
  constructor(
    private readonly deliveriesService: DeliveriesService,
    private readonly pdfService: PdfService,
  ) {}

  @Get('report/:sellingId')
  public async invoice(
    @Param() params: { sellingId: string },
    @Query() query: { sendEmail: boolean } = { sendEmail: false },
    @Res() res: Response,
  ): Promise<void> {
    try {
      const invoiceData = await this.deliveriesService.getReportData(params.sellingId);
      const docDefinition: TDocumentDefinitions = DocumentFactory.createDocument(
        DocumentType.DELIVERY_REPORT,
        invoiceData,
      ).generateDocumentStructure();
      const pdfBuffer = await this.pdfService.generatePdf(docDefinition);
      if (query.sendEmail) {
        await this.deliveriesService.sendEmail(params.sellingId, pdfBuffer);
        console.log('Email sent');
      }
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="invoice-${params.sellingId}.pdf"`,
        'Content-Length': pdfBuffer.length,
      });
      res.send(pdfBuffer);
    } catch (error) {
      console.error('Error generating PDF:', error);
      res.status(500).send('Internal Server Error');
    }
  }
}
