import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { PdfService } from '../../shared/services/pdf/pdf.service';
import { PdfPrinterService } from "../../shared/services/pdf/pdf-printer.service";

@Module({
  providers: [SalesService, PdfService, PdfPrinterService],
  controllers: [SalesController],
})
export class SalesModule {
}
