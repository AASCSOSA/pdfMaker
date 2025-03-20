import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './controller/orders/orders.module';
import { PdfService } from './shared/services/pdf/pdf.service';
import { DeliveriesModule } from './controller/deliveries/deliveries.module';
import { SalesModule } from './controller/sales/sales.module';

@Module({
  imports: [OrdersModule, DeliveriesModule, SalesModule],
  controllers: [AppController],
  providers: [AppService, PdfService],
  //sacas a relucir
})
export class AppModule {}
