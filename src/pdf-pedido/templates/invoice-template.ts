import { DocumentTemplate } from './document-template';
import { Content } from 'pdfmake/interfaces';

export class InvoiceTemplate extends DocumentTemplate {
  constructor(private readonly data: Record<string, any>) {
    super();
  }
  protected createHeader(): Content[] {
    return [
      {
        canvas: [
          {
            type: 'rect',
            x: -40,
            y: -40,
            w: 595,
            h: 245,
            color: '#026EFA',
          },
        ],
      },
      {
        image: 'assets/img/logo-ally.png',
        absolutePosition: { x: 30, y: 20 },
        width: 134,
        height: 68.29,
      },
      {
        table: {
          widths: [70, 290, 105, 75],
          body: [
            [
              'Razón social',
              'CHASE FARMACEUTICAL GROUP S.A DE C.V',
              'Estatus de Pedido',
              { text: 'Orden', bold: true },
            ],
            ['RFC', 'CFG181003SI1', 'Fecha de cotización', '17-03-2023'],
            ['', '', 'Folio de cotización', '17032023P12'],
            ['', '', 'Válido hasta', '24-03-2023'],
          ],
        },
        layout: 'noBorders',
        absolutePosition: { x: 30, y: 110 },
        style: { fontSize: 10, color: '#FFFFFF' },
      },
      {
        table: {
          widths: [45, 130, 40, '*'],
          body: [
            [
              {
                image: 'assets/img/logo-BBVA.png',
                width: 62,
                height: 16,
                margin: [0, 0, 0, 5],
              },
              '',
              {
                image: 'assets/img/logo-santander.png',
                width: 83,
                height: 16,
                margin: [0, 0, 0, 5],
              },
              '',
            ],
            ['Cuenta', '65-50720658-9', 'Cuenta', '0117772076'],
            ['CLABE', '014580655072065895', 'CLABE', '012580001177720762'],
          ],
        },
        layout: 'noBorders',
        absolutePosition: { x: 30, y: 170 },
        style: { fontSize: 10, color: '#FFFFFF', marginTop: 20 },
      },
    ];
  }

  protected createBody(): Content[] {
    return [
      {
        text: `Cliente: ${this.data.client || 'No especificado'}`,
        style: 'bodyText',
      },
      { text: `Fecha: ${this.data.date || 'Sin fecha'}`, style: 'bodyText' },
      { text: `Monto total: $${this.data.total || '0.00'}`, style: 'bodyText' },
    ];
  }

  protected createFooter(): Content {
    return {
      text: 'Gracias por su compra.',
      style: 'footer',
      alignment: 'center',
    };
  }

  protected getStyles(): { [styleName: string]: object } {
    return {
      bodyText: { fontSize: 12, margin: [0, 0, 0, 5] },
      footer: { fontSize: 10, italics: true, margin: [0, 20, 0, 0] },
    };
  }
  s;
  protected getDefaultStyle(): object {
    return { font: 'Inter' };
  }
}
