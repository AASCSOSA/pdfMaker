import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './controller/orders/orders.module';
import { PdfService } from './shared/services/pdf/pdf.service';
import { DeliveriesModule } from './controller/deliveries/deliveries.module';
import { SalesModule } from './controller/sales/sales.module';
import { PdfModule } from "./shared/services/pdf/pdf.module";

@Module({
  imports: [OrdersModule, DeliveriesModule, SalesModule, PdfModule],
  controllers: [AppController],
  providers: [AppService, PdfService],
})
export class AppModule {}
