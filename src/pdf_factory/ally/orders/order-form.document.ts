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
              color: '#026EFA',
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