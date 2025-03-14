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
    return [
      {
        canvas: [
          {
            type: 'rect',
            x: 0,
            y: 0,
            w: 595,
            h: 305,
            r: 1,
            color: '#F9F9FB', //'#F9F9FB'
          },
        ],
        absolutePosition: { x: 0, y: 535 },
      },
      {
        //Customer data fields
        ul: [
          { text: 'Nombre del cliente', listType: 'none', margin: [0, 0, 0, 5], color: '#818181', fontSize: 10, bold: true },
          { text: 'Dirección', listType: 'none', margin: [0, 0, 0, 5], color: '#818181', fontSize: 10, bold: true},
          { text: 'Comentarios adicionales', listType: 'none', margin: [0, 0, 0, 5], color: '#818181', fontSize: 10, bold: true },
          { text: 'Forma de pago', listType: 'none', margin: [0, 0, 0, 5], color: '#818181', fontSize: 10, bold: true },
          { text: 'Fecha de entrega', listType: 'none', margin: [0, 0, 0, 5], color: '#818181', fontSize: 10, bold: true },
        ],
        absolutePosition: { x: 25, y: 540 },
      },
      {
        ul: [
          { text: 'Cristopher Encisoo', listType: 'none', margin: [0, 0, 0, 5], color: '#818181', fontSize: 10 },
          { text: 'Jose Treviño 275 - Celebra, Monterrey, Nuevo León, 77880.', listType: 'none', margin: [0, 0, 0, 5], color: '#818181', fontSize: 10 },
          { text: 'Opcional', listType: 'none', margin: [0, 0, 0, 5], color: '#818181', fontSize: 10 },
          { text: 'Pago Online', listType: 'none', margin: [0, 0, 0, 5], color: '#818181', fontSize: 10 },
          { text: '24-03-2024', listType: 'none', margin: [0, 0, 0, 5], color: '#818181', fontSize: 10 },
        ],
        absolutePosition: { x: 150, y: 540 },
      },
      {
        text: 'Términos y Condiciones',
        bold: true,
        fontSize: 10,
        color: '#818181',
        absolutePosition: { x: 40, y: 638 },
      },
      {
        ol: [
          'El pago será liquidado antes de la entrega de losproductos y medicamentos.',
          'Una vez recibido el producto o medicamento no hay cambios ni devoluciones.',
          'En pagos con transferencia es necesario liquidar antesde recibir los productos y medicamentos.',
          'En medicamentos controlados es necesario entregarcopia de INE(ambos lados) y receta medica.',
          'El consumo de cualquier producto o medicamento es responsabilidad de quien lo receta y consume.',
          'Por políticas internas no se aceptan cambios ni devoluciones en medicamentos controlados y refrigerados.',
        ],
        absolutePosition: { x: 40, y: 655 },
        fontSize: 10,
        color: '#818181',
      },
      {
        ul: [
          { text: 'Dirección', listType: 'none', margin: [0, 0, 0, 4], color: '#818181', fontSize: 10, bold: true },
          { text: 'Teléfono', listType: 'none', margin: [0, 0, 0, 4], color: '#818181', fontSize: 10, bold: true},
          { text: 'Correo', listType: 'none', margin: [0, 0, 0, 4], color: '#818181', fontSize: 10, bold: true },
          { text: 'Sitio web', listType: 'none', margin: [0, 0, 0, 4], color: '#818181', fontSize: 10, bold: true },
        ],
        absolutePosition: { x: 25, y: 738 },
      },
      {
        ul: [
          { text: 'José Treviño 275, Chepevera, 64030 Monterrey, N.L.', listType: 'none', margin: [0, 0, 0, 4], color: '#818181', fontSize: 10},
          { text: '(81) 1297-5125; (81) 1936-9060', listType: 'none', margin: [0, 0, 0, 4], color: '#818181', fontSize: 10},
          { text: 'contacto@fgo.mx', listType: 'none', margin: [0, 0, 0, 4], color: '#818181', fontSize: 10},
          { text: 'www.fgo.mx', listType: 'none', margin: [0, 0, 0, 4], color: '#818181', fontSize: 10},
        ],
        absolutePosition: { x: 80, y: 738 },
      },
    ];

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
