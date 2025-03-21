import { Module } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { PdfPrinterService } from './pdf-printer.service';

@Module({
  providers: [PdfService, PdfPrinterService],
})
export class PdfModule {}
