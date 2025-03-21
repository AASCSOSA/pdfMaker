import { DocumentTemplate } from '../document.template';
import { OrderFormDocument } from '../../template/pdf/orders/order-form.document';
import { DeliveryReportDocument } from '../../template/pdf/delivery/delivery-report.document';
import { SaleReportDocument } from '../../template/pdf/sales/sale-report.document';

//TODO: Changue the name of the enum to DocumentType
export enum DocumentType {
  ORDER_FORM = 'order-form',
  DELIVERY_REPORT = 'delivery-report',
  SALE_REPORT = 'sale-report',
}

export class DocumentFactory {
  static createDocument(type: DocumentType, data: any): DocumentTemplate {
    switch (type) {
      case DocumentType.ORDER_FORM:
        return new OrderFormDocument(data);
      case DocumentType.DELIVERY_REPORT:
        return new DeliveryReportDocument(data);
      case DocumentType.SALE_REPORT:
        return new SaleReportDocument(data);
      default:
        throw new Error(`Document type ${type} not supported`);
    }
  }
}
