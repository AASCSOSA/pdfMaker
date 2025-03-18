import { DocumentTemplate } from "../components/document.template";
import { OrderFormDocument } from "../ally/orders/order-form.document";
import { DeliveryReportDocument } from "../fgo/delivery/delivery-report.document";
import { DocumentFactoryAbstract } from "./document-factory.abstract";
import { DocumentType } from "./enums/document-type.enums";

export class DocumentFactory {
  static createDocument(type: DocumentType, data: any): DocumentTemplate {
    switch (type) {
      case DocumentType.ORDER_FORM:
        return new OrderFormDocument(data);
      case DocumentType.DELIVERY_REPORT:
        return new DeliveryReportDocument(data);
      default:
        throw new Error(`Document type ${type} not supported`);
    }
  }
}