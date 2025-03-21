import { DocumentTemplate } from '../../../shared/document.template';
import { OrderHeaderComponent } from '../../../components/order-header/order-header.component';
import { OrderFooterComponent } from '../../../components/order-footer/order-footer.component';
import { CreatePriceBreakdownSection } from "../../../components/order-form/table-price/create-price-breakdown-table";
import { CreateTableProducts } from "../../../components/order-form/table-products/create-table-products";


export class OrderFormDocument extends DocumentTemplate {
  constructor(private deliveryData: any) {
    super(`order-report-${deliveryData.id}.pdf`);
    this.buildDocument();
  }

  textOverflow(description: string): string {
    if (description.length > 60) {
      return description.slice(0, 38) + ` ${description.slice(38, 75)}…`;
    }
    return description;
  }

  private buildDocument(): void {
    this.addComponent(new OrderHeaderComponent());
    const {
      section: pricesSection,
      table: pricesTable,
    } = CreatePriceBreakdownSection(this.deliveryData);
    this.addComponent(pricesSection);
    this.addComponent(pricesTable);
    this.addComponent(new OrderFooterComponent());
    this.addComponent({render: () => ({text: '', pageBreak: 'after'}),});
  const {
      section: productsSection,
      table: productsTable,
    } = CreateTableProducts(this.deliveryData);
    this.addComponent(productsSection);
    this.addComponent(productsTable);
  }
}
