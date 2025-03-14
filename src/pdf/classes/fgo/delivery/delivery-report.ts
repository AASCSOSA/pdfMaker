import { DocumentTemplate } from "../../document.template";
import { Content, StyleDictionary, StyleReference } from "pdfmake/interfaces";
import { node } from "globals";

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

// Encabezado azul

  protected createBody(): Content[] {
    return [
      {
        canvas: [
          {
            type: 'rect',
            x: 0,
            y: 0,
            w: 515.1,
            h: 26,
            color: '#13277A',
          }
        ],
        relativePosition: {x: 0, y: 30},
      },
      // Texto del encabezado
      {
        text: 'Desglose de Precio',
        style: 'sectionHeader',
        alignment: 'center',
        bold: true,
        color: 'white',
        relativePosition: {x: 0, y: 35},
      },
      {
        table: {
          widths: ['*', 'auto'],
          heights: function (row) {
            return 36; // Altura exacta de 26 puntos para cada fila
          },
          dontBreakRows: true,
          keepWithHeaderRows: 1,
          body: [
            [
              {
                text: 'Concepto',
                style: 'boldText',
                fontSize: 10,
                fillColor: '#E6F7F7',
                height: 36,
                color: '#111118',
                margin: [10, 11, 0, 0],
                font: 'Roboto',
              },
              {
                text: 'Precio',
                alignment: 'right',
                style: 'boldText',
                margin: [0, 11, 10, 0],
                fillColor: '#E6F7F7',
                height: 36,
                fontSize: 10,
                color: '#111118',
              }
            ],
            ...this.generateTableRows()
          ]
        },
        layout: {
          hLineWidth: (i: number) => (i === 0 || i === 5) ? 1 : 1,
          vLineWidth: (i: number) => {
            if (i === 0) {
              return 1;
            }
            if (i == 2) {
              return 1;
            } else {
              return 0;
            }
          },
          vLineColor: () => '#EBF2FE',
          hLineColor: () => '#EBF2FE',
          paddingTop: () => 0,
          paddingBottom: () => 0
        },
        relativePosition: {x: 0, y: 56},
      }, {
        text: '',
        pageBreak: 'after'
      },
      {
        stack: [
          {
            canvas: [
              {
                type: 'rect',
                x: -40, // Margen izquierdo
                y: -40, // Margen superior
                w: 595, // Ancho completo - márgenes
                h: 26,
                color: '#13277A',
              }
            ]
          },
          {
            text: 'Desglose de Productos',
            style: 'sectionHeader',
            fontSize: 15,
            absolutePosition: {x: 22, y: 2} // Ajuste fino de posición
          }
        ]
      },
      {
        table: {
          widths: [230, 70, 25, 80, 60, 80], // Anchos fijos para columnas
          heights: function (row) {
            return 46; // Altura exacta de 26 puntos para cada fila
          },
          body: [
            [
              {text: 'Descripción', style: 'headerCell', bold: true, margin: [10, 15, 0, 0]},
              {text: 'Precio Unitario', style: 'headerCell', alignment: 'center', bold: true, margin: [0, 15, 0, 0]},
              {text: 'Cant.', style: 'headerCell', alignment: 'center', bold: true, margin: [0, 15, 0, 0]},
              {text: 'Subtotal', style: 'headerCell', alignment: 'center', bold: true, margin: [0, 15, 0, 0]},
              {text: 'IVA', style: 'headerCell', alignment: 'center', bold: true, margin: [0, 15, 0, 0]},
              {text: 'Total', style: 'headerCell', alignment: 'center', bold: true, margin: [0, 15, 10, 0]}
            ],
            ...this.generateProductRows()
          ],
          headerRows: 1,
          dontBreakRows: true,
          keepWithHeaderRows: 1,
        },
        layout: {
          hLineWidth: () => 1,
          vLineWidth: () => 1,
          hLineColor: () => '#EBF2FE',
          vLineColor: () => '#EBF2FE',
          paddingTop: () => 5,
          paddingBottom: () => 5
        },
        relativePosition: {x: -40, y: -14},
      }
    ];
  }

  private generateProductRows(): any[] {
    // Aquí puedes generar las filas de productos dinámicamente
    // Ejemplo de datos de productos
    const products = [
      {description: 'Producto 1', unitPrice: 10.00, quantity: 2, subtotal: 20.00, iva: 3.20, total: 23.20},
      {description: 'Producto 2', unitPrice: 15.00, quantity: 1, subtotal: 15.00, iva: 2.40, total: 17.40},
      {description: 'Producto 2', unitPrice: 15.00, quantity: 1, subtotal: 15.00, iva: 2.40, total: 17.40},
      {description: 'Producto 2', unitPrice: 15.00, quantity: 1, subtotal: 15.00, iva: 2.40, total: 17.40},
      // Agrega más productos según sea necesario
    ];

    return products.map(product => [
      {text: product.description, margin: [10, 15, 0, 0], fontSize: 10, alignment: 'left'},
      {text: `$ ${product.unitPrice.toFixed(2)}`, alignment: 'center', margin: [0, 15, 0, 0], style: {fontSize: 10}},
      {text: product.quantity.toString(), alignment: 'center', margin: [0, 15, 0, 0], style: {fontSize: 10}},
      {text: `$ ${product.subtotal.toFixed(2)}`, alignment: 'center', margin: [0, 15, 0, 0], style: {fontSize: 10}},
      {text: `$ ${product.iva.toFixed(2)}`, alignment: 'center', margin: [0, 15, 0, 0], style: {fontSize: 10}},
      {text: `$ ${product.total.toFixed(2)}`, alignment: 'center', margin: [0, 15, 0, 0], style: {fontSize: 10}}
    ]);
  }

  private generateTableRows(): any[] {
    return [
      [
        {text: 'Subtotal', margin: [10, 8, 0, 0], style: {fontSize: 10}},
        {text: '$ 363.62', alignment: 'right', margin: [0, 8, 10, 0], style: {fontSize: 10}}
      ],
      [
        {text: 'Envío', margin: [10, 8, 0, 0], style: {fontSize: 10}},
        {text: '$ 100.00', alignment: 'right', margin: [0, 8, 10, 0], style: {fontSize: 10}}
      ],
      [
        {text: 'IVA', margin: [10, 8, 0, 0], style: {fontSize: 10}},
        {text: '$ 41.38', alignment: 'right', margin: [0, 8, 10, 0], style: {fontSize: 10}}
      ],
      [
        {text: 'Total', margin: [10, 8, 0, 0], style: {bold: true, fontSize: 10}},
        {
          text: '$ 405.00',
          alignment: 'right',
          margin: [0, 8, 10, 0],
          style: {bold: true, fontSize: 10},
          border: [true, true, true, true] // Elimina borde izquierdo
        }
      ]
    ];
  }

  protected createFooter(): Content {
    return {
      'text': ' '
    }
  }

  protected createHeader(): Content {
    return {
      canvas: [
        {
          type: 'rect', // Rectángulo
          x: -40,
          y: -40,
          w: 596,
          h: 245,
          color: '#026EFA',
        },
      ],
    }
  }

  protected getStyles(): StyleDictionary {
    return {
      header: {
        fontSize: 22,
        bold: true,
      },
      sectionHeader: {
        fontSize: 12,
        color: '#ffffff',
        alignment: 'center',
        bold: true,
      },
      boldText: {
        bold: true,
      },
      tableRows: {
        fontSize: 12,
      },
      headerCell: {
        bold: true,
        fontSize: 10,
        fillColor: '#E6F7F7',
        color: '#111118',
      },
      productCell: {
        fontSize: 10,
        margin: [10, 6, 10, 6],
        color: '#111118'
      },
      tableCell: {
        fontSize: 10,
        margin: [10, 8, 10, 8]
      },
      totalCell: {
        fontSize: 10,
        bold: true,
        margin: [10, 8, 10, 8]
      }
    }
  }

}
