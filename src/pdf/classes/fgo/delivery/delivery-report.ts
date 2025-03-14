import { DocumentTemplate } from "../../document.template";

export class DeliveryReport extends DocumentTemplate {
  constructor(deliveryId?: string) {
    super();
    this.setFileName(`delivery-report-${deliveryId}.pdf`);
  }

  setFileName(fileName: string) {
    super.setFileName(fileName);
  }

  protected createBody(): any[] {
    return [
      {
        text: 'FGO Delivery Report',
        style: 'header',
      },
    ]
  }

  protected createFooter(): any {
    return {
      columns: [
        {
          text: 'Soy el footer',
          style: 'header',
        },
      ],
    }
  }

  protected createHeader(): any {
    return {
      columns: [
        {
          text: 'Logos',
          style: 'header',
        },
      ],
    }
  }

  protected getStyles(): any {
    return {
      header: {
        fontSize: 40,
        bold: true,
        margin: [0, 0, 0, 10],
      },
    };
  }

}
