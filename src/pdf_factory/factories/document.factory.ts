import { DocumentTemplate_Abstract } from "../components/document.template";
import { OrderFormDocument_Abstract } from "../ally/orders/order-form.document";
import { DeliveryReportDocument } from "../fgo/delivery/delivery-report.document";

export class DocumentFactory_Abstract {
  static createDocument(type: string, data: any): DocumentTemplate_Abstract {
    switch (type) {
      case 'orderForm':
        return new OrderFormDocument_Abstract(data);
      /*case 'invoice':
        return new InvoiceDocument(data);*/
      // Add other document types
      case 'deliveryReport':
        return new DeliveryReportDocument(data);
      default:
        throw new Error(`Document type ${type} not supported`);
    }
  }
}