import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { InvoiceTemplate } from './templates/invoice-template';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('invoice')
  async generateInvoice(
    @Query() query: Record<string, string>,
    @Res() res: Response,
  ) {
    const invoiceTemplate = new InvoiceTemplate(query);
    invoiceTemplate.setFileName('factura.pdf');

    const pdfBuffer = await this.pdfService.generatePdf(invoiceTemplate);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${invoiceTemplate.getFileName()}"`,
    });
    res.send(pdfBuffer);
  }
}
