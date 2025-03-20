import { Module } from '@nestjs/common';
import { DeliveriesController } from './deliveries.controller';
import { DeliveriesService } from './deliveries.service';
import { PdfService } from '../../shared/services/pdf/pdf.service';
import { PdfPrinterService } from "../../shared/services/pdf/pdf-printer.service";

@Module({
  providers: [DeliveriesService, PdfService, PdfPrinterService],
  controllers: [DeliveriesController],
})
export class DeliveriesModule {}
