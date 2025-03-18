import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { PdfService } from '../../pdf.generator/pdf.service';

@Module({
  providers: [OrdersService, PdfService],
  controllers: [OrdersController],
})
export class OrdersModule {}
