import { DocumentTemplate } from '../../../shared/document.template';
import { PageSizes, } from '../../../styles/styles';

import { BackgroundComponent } from '../../../components/background/background.component';
import { SaleHeaderTemplate } from '../../../components/sale-header/sale-header.template';

export class SaleReportDocument extends DocumentTemplate {
  constructor(private saleData: any) {
    super(`sale-report-${saleData.saleId}.pdf`, PageSizes.A4);
    this.buildDocument();
  }

  private buildDocument(): void {
    this.addComponent(
      new BackgroundComponent({
        color: 'VENICE_BLUE',
        width: 595,
        height: 171,
        position: { x: 0, y: 0 },
      }),
    );
    this.addComponent(new SaleHeaderTemplate(this.saleData));
  }
}
