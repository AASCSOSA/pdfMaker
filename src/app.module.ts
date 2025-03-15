import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfService } from './pdf/pdf.service';
import { PdfController } from './pdf/pdf.controller';
import { PruebaController } from './controller/prueba/prueba.controller';
import { PruebaService } from './controller/prueba/prueba.service';
import { PruebaModule } from './controller/prueba/prueba.module';
import { ReportService } from './controller/report/report.service';
import { PdfFactoryController } from './pdf_factory/pdf_factory.controller';
import { PdfAbstractService } from './pdf_factory/pdf_abstract.service';

@Module({
  imports: [PruebaModule],
  controllers: [AppController, PdfController, PruebaController, PdfFactoryController],
  providers: [AppService, PdfService, PruebaService, ReportService, PdfAbstractService],
})
export class AppModule {}
