import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PruebaController } from './controller/prueba/prueba.controller';
import { PruebaService } from './controller/prueba/prueba.service';
import { PruebaModule } from './controller/prueba/prueba.module';
import { ReportService } from './controller/report/report.service';
import { PdfService } from './pdf-pedido/pdf.service';
import { PdfController } from './pdf-pedido/pdf.controller';

@Module({
  imports: [PruebaModule],
  controllers: [AppController, PdfController, PruebaController],
  providers: [AppService, PdfService, PruebaService, ReportService],
})
export class AppModule {}
