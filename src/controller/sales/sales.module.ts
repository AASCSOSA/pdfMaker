import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { PdfService } from '../../pdf.generator/pdf.service';

@Module({
  providers: [SalesService, PdfService],
  controllers: [SalesController],
})
export class SalesModule {}
