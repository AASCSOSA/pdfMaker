import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './controller/orders/orders.controller';
import { OrdersModule } from './controller/orders/orders.module';
import { PdfService } from "./pdf.generator/pdf.service";
import { DeliveriesModule } from './controller/deliveries/deliveries.module';

@Module({
  imports: [OrdersModule, DeliveriesModule],
  controllers: [AppController],
  providers: [AppService, PdfService],
  //sacas a relucir
})
export class AppModule {}
