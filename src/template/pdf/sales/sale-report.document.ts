import { DocumentTemplate } from '../../../shared/document.template';
import { PageSizes } from '../../../styles/styles';
import { SaleHeaderTemplate } from '../../../components/sale-header/sale-header.template';
import { CreateProductsTable } from '../../../components/sale-body/table-products/products-table.template';

export class SaleReportDocument extends DocumentTemplate {
  constructor(private saleData: any) {
    super(`sale-report-${saleData.saleId}.pdf`, PageSizes.A4);
    this.buildDocument();
  }

  private buildDocument(): void {
    this.addComponent(new SaleHeaderTemplate(this.saleData));
    const { tableTitle: tableTitle, table: productsTable } = CreateProductsTable(this.saleData);
    this.addComponent(tableTitle);
    this.addComponent(productsTable);
  }
}
