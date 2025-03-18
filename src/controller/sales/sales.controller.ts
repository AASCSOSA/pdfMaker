import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { SalesService } from './sales.service';
import { PdfService } from '../../pdf.generator/pdf.service';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { DocumentFactory } from '../../pdf.generator/factories/document.factory';
import { DocumentType } from '../../pdf.generator/factories/enums/document-type.enums';

@Controller('sales')
export class SalesController {
  constructor(
    private readonly salesService: SalesService,
    private readonly pdfService: PdfService,
  ) {}

  @Get('invoice/:sellingId')
  public async invoice(
    @Param() params: { sellingId: string },
    @Query() query: { sendEmail: boolean } = { sendEmail: false },
    @Res() res: Response,
  ): Promise<void> {
    try {
      const saleData = await this.salesService.getSaleData(params.sellingId);
      const docDefinition: TDocumentDefinitions = DocumentFactory.createDocument(
        DocumentType.SALE_REPORT,
        saleData,
      ).generateDocumentStructure();
      const pdfBuffer = await this.pdfService.generatePdf(docDefinition);
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
