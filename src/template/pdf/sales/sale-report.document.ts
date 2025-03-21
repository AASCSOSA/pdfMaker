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
<<<<<<< HEAD:src/pdf/documents/sales/sale-report.document.ts
        color: Colors.TOREA_BAY,
=======
        color: 'VENICE_BLUE',
>>>>>>> master:src/template/pdf/sales/sale-report.document.ts
        width: 595,
        height: 170,
        position: { x: 0, y: 0 },
      }),
    );
    this.addComponent(new SaleHeaderTemplate(this.saleData));
  }
}
