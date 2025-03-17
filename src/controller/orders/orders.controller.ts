import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { OrdersService } from "./orders.service";
import { DocumentFactory_Abstract } from "../../pdf.generator/factories/document.factory";
import { DocumentType } from "../../pdf.generator/enums/document-type.enums";
import { Response } from 'express';
import { PdfService } from "../../pdf.generator/pdf.service";
import { TDocumentDefinitions } from "pdfmake/interfaces";

@Controller('orders')
export class OrdersController {

  constructor(
    private readonly ordersService: OrdersService,
    private readonly pdfService: PdfService
  ) {
  }

  @Get(':sellingId/invoice')
  public async invoice(
    @Param() params: { sellingId: string },
    @Query() query: { sendEmail: boolean } = {sendEmail: false},
    @Res() res: Response
  ): Promise<void> {
    try {
      const invoiceData = await this.ordersService.getSellingData(params.sellingId);
      const docDefinition: TDocumentDefinitions = DocumentFactory_Abstract.createDocument(DocumentType.ORDER_FORM, invoiceData).generateDocumentStructure();
      const pdfBuffer = await this.pdfService.generatePdf(docDefinition);
      if (query.sendEmail) {
        await this.ordersService.sendEmail(params.sellingId, pdfBuffer);
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
