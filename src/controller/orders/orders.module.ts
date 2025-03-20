import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { PdfService } from '../../shared/services/pdf/pdf.service';
import { PdfPrinterService } from "../../shared/services/pdf/pdf-printer.service";

@Module({
  providers: [OrdersService, PdfService, PdfPrinterService],
  controllers: [OrdersController],
})
export class OrdersModule {}
