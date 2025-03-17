import { DocumentTemplate } from "../components/document.template";
import { OrderFormDocument } from "../ally/orders/order-form.document";
import { DeliveryReportDocument } from "../fgo/delivery/delivery-report.document";
import { DocumentFactoryAbstract } from "./document-factory.abstract";
import { DocumentType } from "../enums/document-type.enums";

export class DocumentFactory_Abstract {
  static createDocument(type: string, data: any): DocumentTemplate {
    switch (type) {
      case 'orderForm':
        return new OrderFormDocument(data);
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