import { HeaderComponent } from "../../components/header.component";
import { TableComponent } from "../../components/tables/table.component";
import { SectionComponent } from "../../components/section.component";
import { Content, StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import { DocumentTemplate } from "../../components/document.template";
import { TableCellComponent } from "../../components/tables/table-cell.component";

export class OrderFormDocument extends DocumentTemplate {
  constructor(private deliveryData: any) {
    super(`delivery-report-${deliveryData.id}.pdf`);
    this.buildDocument();
  }

  private buildDocument(): void {
    this.addComponent({
      render: (): Content => ([{
          canvas: [
            {
              type: 'rect',
              x: -40,
              y: -40,
              w: 595,
              h: 245,
              color: '#3a86e8',
            },
          ],
        },
          {
            image: 'assets/img/logo-ally.png',
            absolutePosition: {x: 30, y: 20},
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
                  {text: 'Orden', bold: true},
                ],
                ['RFC', 'CFG181003SI1', 'Fecha de cotización', '17-03-2023'],
                ['', '', 'Folio de cotización', '17032023P12'],
                ['', '', 'Válido hasta', '24-03-2023'],
              ],
            },
            layout: 'noBorders',
            absolutePosition: {x: 30, y: 110},
            style: {fontSize: 10, color: '#FFFFFF'},
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
            absolutePosition: {x: 30, y: 170},
            style: {fontSize: 10, color: '#FFFFFF', marginTop: 20},
          },]
      )
    });
    this.addComponent({
      render: () => ({text: '\n'})
    });
    const conceptoHeader = new TableCellComponent("Concepto")
      .setBold(true)
      .setFillColor('#E6F7F7');
    const precioHeader = new TableCellComponent("Precio")
      .setBold(true)
      .setFillColor('#E6F7F7')
      .setAlignment('right');
    const dataRows = [
      [
        new TableCellComponent('Subtotal').setMargin([0, 10, 0, 10]),
        new TableCellComponent(`$ ${this.deliveryData.subtotal.toFixed(2)}`).setMargin([0, 10, 0, 10]).setAlignment('right')
      ],
      [
        new TableCellComponent('Envío').setMargin([0, 10, 0, 10]),
        new TableCellComponent(`$ ${this.deliveryData.shipping.toFixed(2)}`).setMargin([0, 10, 0, 10]).setAlignment('right')
      ],
      [
        new TableCellComponent('IVA').setMargin([0, 10, 0, 10]),
        new TableCellComponent(`$ ${this.deliveryData.tax.toFixed(2)}`).setMargin([0, 10, 0, 10]).setAlignment('right')
      ],
      [
        new TableCellComponent('Total').setMargin([0, 10, 0, 10]).setBold(true),
        new TableCellComponent(`$ ${this.deliveryData.total.toFixed(2)}`).setBold(true).setMargin([0, 10, 0, 10]).setAlignment('right')
      ]
    ];
    this.addComponent(new SectionComponent('Desglose de Precio')
      .setWidth(515)
      .setAxisTextPosition(10, -20)
      .setTextColor('#ffffff')
      .setSectionColor('#13277A')
    );
    this.addComponent(new TableComponent()
      .setPosition(0, 0)
      .setHeaders([conceptoHeader, precioHeader])
      .setData(dataRows)
      .setWidths(['*', 80])
    );
    this.addComponent({
      render: () => ({text: '', pageBreak: 'after'})
    });
    const productHeaders = [
      new TableCellComponent('Descripción').setBold(true).setFillColor('#E6F7F7').setAlignment('left').setMargin([0, 8, 0, 0]),
      new TableCellComponent('Precio Unitario').setBold(true).setFillColor('#E6F7F7').setAlignment('left').setMargin([0, 8, 0, 0]),
      new TableCellComponent('Cant.').setBold(true).setFillColor('#E6F7F7').setAlignment('center').setMargin([0, 8, 0, 0]),
      new TableCellComponent('Subtotal').setBold(true).setFillColor('#E6F7F7').setAlignment('center').setMargin([0, 8, 0, 0]),
      new TableCellComponent('IVA').setBold(true).setFillColor('#E6F7F7').setAlignment('center').setMargin([0, 8, 0, 0]),
      new TableCellComponent('Total').setBold(true).setFillColor('#E6F7F7').setAlignment('center').setMargin([0, 8, 0, 0])
    ];
    const productRows = this.deliveryData.products.map(product => [
      new TableCellComponent(product.description).setMargin([0, 15, 0, 0]),
      new TableCellComponent(`$ ${product.unitPrice.toFixed(2)}`).setMargin([0, 15, 0, 0]).setAlignment('right'),
      new TableCellComponent(product.quantity.toString()).setMargin([0, 15, 0, 0]).setAlignment('center'),
      new TableCellComponent(`$ ${product.subtotal.toFixed(2)}`).setMargin([0, 15, 0, 0]).setAlignment('right'),
      new TableCellComponent(`$ ${product.iva.toFixed(2)}`).setMargin([0, 15, 0, 0]).setAlignment('right'),
      new TableCellComponent(`$ ${product.total.toFixed(2)}`).setMargin([0, 15, 0, 0]).setAlignment('right'),
    ]);
    this.addComponent(new SectionComponent('Desglose de Productos')
      .setSectionColor('#13277A')
      .setWidth(595)
      .setAxisSectionPosition(-40, -40)
      .setAxisTextPosition(10, -35)
      .setTextColor('#ffffff')
    );
    this.addComponent(new TableComponent()
      .setPosition(-40, -14)
      .setHeaders(productHeaders)
      .setData(productRows)
      .setWidths([220, 80, 30, 70, 60, 80])
    );
    const productRows1 = this.deliveryData.products.map(product => [
      new TableCellComponent(product.description).setMargin([0, 15, 0, 0]),
      new TableCellComponent(`$ ${product.unitPrice.toFixed(2)}`).setMargin([0, 15, 0, 0]).setAlignment('right'),
      new TableCellComponent(product.quantity.toString()).setMargin([0, 15, 0, 0]).setAlignment('center'),
      new TableCellComponent(`$ ${product.subtotal.toFixed(2)}`).setMargin([0, 15, 0, 0]).setAlignment('right'),
      new TableCellComponent(`$ ${product.iva.toFixed(2)}`).setMargin([0, 15, 0, 0]).setAlignment('right'),
      new TableCellComponent(`$ ${product.total.toFixed(2)}`).setMargin([0, 15, 0, 0]).setAlignment('right'),
    ]);
    this.addComponent(new SectionComponent('Desglose de Productos')
      .setSectionColor('#13277A')
      .setWidth(595)
      .setAxisSectionPosition(-40, -40)
      .setAxisTextPosition(10, -35)
      .setTextColor('#ffffff')
    );
    this.addComponent(new TableComponent()
      .setPosition(-40, -14)
      .setHeaders(productHeaders)
      .setData(productRows1)
      .setWidths([220, 80, 30, 70, 60, 80])
    );
    this.addComponent({
      render: (): Content => ({
          text: "\n"
        }
      )
    });
    this.addComponent({
      render: (): Content => ({
          text: "Hola",
          absolutePosition: {x: 30, y: 450},
        }
      )
    });
    this.addComponent({
      render: (): Content => ([
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
            {
              text: 'Nombre del cliente',
              listType: 'none',
              margin: [0, 0, 0, 5],
              color: '#818181',
              fontSize: 10,
              bold: true,
            },
            {
              text: 'Dirección',
              listType: 'none',
              margin: [0, 0, 0, 5],
              color: '#818181',
              fontSize: 10,
              bold: true,
            },
            {
              text: 'Comentarios adicionales',
              listType: 'none',
              margin: [0, 0, 0, 5],
              color: '#818181',
              fontSize: 10,
              bold: true,
            },
            {
              text: 'Forma de pago',
              listType: 'none',
              margin: [0, 0, 0, 5],
              color: '#818181',
              fontSize: 10,
              bold: true,
            },
            {
              text: 'Fecha de entrega',
              listType: 'none',
              margin: [0, 0, 0, 5],
              color: '#818181',
              fontSize: 10,
              bold: true,
            },
          ],
          absolutePosition: { x: 25, y: 540 },
        },
        {
          ul: [
            {
              text: 'Cristopher Encisoo',
              listType: 'none',
              margin: [0, 0, 0, 5],
              color: '#818181',
              fontSize: 10,
            },
            {
              text: 'Jose Treviño 275 - Celebra, Monterrey, Nuevo León, 77880.',
              listType: 'none',
              margin: [0, 0, 0, 5],
              color: '#818181',
              fontSize: 10,
            },
            {
              text: 'Opcional',
              listType: 'none',
              margin: [0, 0, 0, 5],
              color: '#818181',
              fontSize: 10,
            },
            {
              text: 'Pago Online',
              listType: 'none',
              margin: [0, 0, 0, 5],
              color: '#818181',
              fontSize: 10,
            },
            {
              text: '24-03-2024',
              listType: 'none',
              margin: [0, 0, 0, 5],
              color: '#818181',
              fontSize: 10,
            },
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
            {
              text: 'Dirección',
              listType: 'none',
              margin: [0, 0, 0, 4],
              color: '#818181',
              fontSize: 10,
              bold: true,
            },
            {
              text: 'Teléfono',
              listType: 'none',
              margin: [0, 0, 0, 4],
              color: '#818181',
              fontSize: 10,
              bold: true,
            },
            {
              text: 'Correo',
              listType: 'none',
              margin: [0, 0, 0, 4],
              color: '#818181',
              fontSize: 10,
              bold: true,
            },
            {
              text: 'Sitio web',
              listType: 'none',
              margin: [0, 0, 0, 4],
              color: '#818181',
              fontSize: 10,
              bold: true,
            },
          ],
          absolutePosition: { x: 25, y: 738 },
        },
        {
          ul: [
            {
              text: 'José Treviño 275, Chepevera, 64030 Monterrey, N.L.',
              listType: 'none',
              margin: [0, 0, 0, 4],
              color: '#818181',
              fontSize: 10,
            },
            {
              text: '(81) 1297-5125; (81) 1936-9060',
              listType: 'none',
              margin: [0, 0, 0, 4],
              color: '#818181',
              fontSize: 10,
            },
            {
              text: 'contacto@fgo.mx',
              listType: 'none',
              margin: [0, 0, 0, 4],
              color: '#818181',
              fontSize: 10,
            },
            {
              text: 'www.fgo.mx',
              listType: 'none',
              margin: [0, 0, 0, 4],
              color: '#818181',
              fontSize: 10,
            },
          ],
          absolutePosition: { x: 80, y: 738 },
        },
        {
          text: '',
          pageBreak: 'after',
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
                },
              ],
            },
            {
              text: 'Desglose de Productos',
              style: 'sectionHeader',
              fontSize: 15,
              absolutePosition: { x: 22, y: 2 }, // Ajuste fino de posición
            },
          ],
        },
        {
          table: {
            widths: [230, 70, 25, 80, 60, 80], // Anchos fijos para columnas
            heights: function (row) {
              return 46; // Altura exacta de 26 puntos para cada fila
            },
            body: [
              [
                {
                  text: 'Descripción',
                  style: 'headerCell',
                  bold: true,
                  margin: [10, 15, 0, 0],
                },
                {
                  text: 'Precio Unitario',
                  style: 'headerCell',
                  alignment: 'center',
                  bold: true,
                  margin: [0, 15, 0, 0],
                },
                {
                  text: 'Cant.',
                  style: 'headerCell',
                  alignment: 'center',
                  bold: true,
                  margin: [0, 15, 0, 0],
                },
                {
                  text: 'Subtotal',
                  style: 'headerCell',
                  alignment: 'center',
                  bold: true,
                  margin: [0, 15, 0, 0],
                },
                {
                  text: 'IVA',
                  style: 'headerCell',
                  alignment: 'center',
                  bold: true,
                  margin: [0, 15, 0, 0],
                },
                {
                  text: 'Total',
                  style: 'headerCell',
                  alignment: 'center',
                  bold: true,
                  margin: [0, 15, 10, 0],
                },
              ],
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              ...this.generateProductRows(),
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
            paddingBottom: () => 5,
          },
          relativePosition: { x: -40, y: -14 },
        },
      ])
    });
  }

  protected getStyles(): StyleDictionary {
    return {
      h1: {
        fontSize: 24,
      },
      h2: {
        fontSize: 18,
      },
      h3: {
        fontSize: 14,
      },
      h4: {
        fontSize: 12,
      },
      h5: {
        fontSize: 10,
      },
      headerCell: {
        bold: true,
        fontSize: 10,
        fillColor: '#E6F7F7',
        color: '#111118',
      },

      sectionHeader: {
        fontSize: 12,
        color: '#ffffff',
        alignment: 'center',
        bold: true,
      },
    };
  }
}