import { Module } from '@nestjs/common';
import { DeliveriesController } from './deliveries.controller';
import { DeliveriesService } from './deliveries.service';
import { PdfService } from '../../shared/services/pdf/pdf.service';

@Module({
  providers: [DeliveriesService, PdfService],
  controllers: [DeliveriesController],
})
export class DeliveriesModule {}
