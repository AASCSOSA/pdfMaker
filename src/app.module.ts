import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfService } from './pdf/pdf.service';
import { PdfController } from './pdf/pdf.controller';
import { PruebaController } from './controller/prueba/prueba.controller';
import { PruebaService } from './controller/prueba/prueba.service';
import { PruebaModule } from './controller/prueba/prueba.module';
import { ReportService } from './controller/report/report.service';

@Module({
  imports: [PruebaModule],
  controllers: [AppController, PdfController, PruebaController],
  providers: [AppService, PdfService, PruebaService, ReportService],
})
export class AppModule {}
