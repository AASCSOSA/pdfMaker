import { DocumentTemplate } from "../../document.template";
import { Content } from "pdfmake/interfaces";

export class DeliveryReport extends DocumentTemplate {
  private date: Date = new Date();
  private deliveryId: string;
  private delivery: any;
  private deliveryItems: any;

  constructor(deliveryId?: string) {
    super();
    this.setFileName(`delivery-report-${deliveryId}.pdf`);
  }

  setFileName(fileName: string) {
    super.setFileName(fileName);
  }

  protected createBody(): Content[] {
    return [
      {
        columns: [
          {
            text: 'Delivery ID',
            style: 'header',
          },
          {
            text: this.deliveryId,
            style: 'header',
          },
        ],
      },
      {
        text: [
          'Delivery Date: ',
          {text: this.date.toDateString()},
        ]
      },
      {
        canvas: [
          {
            type: 'rect',
            x: 0,
            y: 0,
            w: 100,
            h: 100,
            r: 10,
            color: 'blue',
          },
        ],
      },
      {
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 100, '*'],
          body: [
            ['First', 'Second', 'Third', 'Fourth'],
            ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
          ],
        },
      },
    ];
  }

  protected createFooter(): Content {
    return {
      columns: [
        {
          text: 'Soy el footer',
          style: 'header',
        },
      ],
    }
  }

  protected createHeader(): Content {
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
