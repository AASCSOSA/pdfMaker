import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruebaController } from './controller/prueba/prueba.controller';
import { PruebaService } from './controller/prueba/prueba.service';
import { PruebaModule } from './controller/prueba/prueba.module';
import { ReportService } from './controller/report/report.service';
import { PdfFactoryController } from './pdf_factory/pdf_factory.controller';
import { PdfAbstractService } from './pdf_factory/pdf_abstract.service';

@Module({
  imports: [PruebaModule],
  controllers: [AppController , PruebaController, PdfFactoryController],
  providers: [AppService, PruebaService, ReportService, PdfAbstractService],
})
export class AppModule {}
