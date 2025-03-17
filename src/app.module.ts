import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfFactoryController } from './pdf.generator/pdf_factory.controller';
import { OrdersController } from './controller/orders/orders.controller';
import { OrdersModule } from './controller/orders/orders.module';
import { PdfService } from "./pdf.generator/pdf.service";

@Module({
  imports: [OrdersModule],
  controllers: [AppController],
  providers: [AppService, PdfService],
  //sacas a relucir
})
export class AppModule {}
