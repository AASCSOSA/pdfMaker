import { DocumentTemplate_Abstract } from "../../components/document.template";
import { Content, StyleDictionary } from "pdfmake/interfaces";
import { SectionComponent } from "../../components/section.component";
import { TableCellComponent } from "../../components/tables/table-cell.component";
import { TableComponent } from "../../components/table.component";

export class DeliveryReportDocument extends DocumentTemplate_Abstract {

  constructor(private deliveryData: any) {
    super()
    this.buildDocument();
  }

  private buildDocument(): void {
    this.addComponent({
      render(): any {
        return [
          {
            canvas: [
              {
                type: 'rect',
                x: -40,
                y: -40,
                w: 595,
                h: 152,
                color: '#0C2788',
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
            text: [
              {text: 'Reporte de entrega\n', bold: false, fontSize: 16,},
              {text: '\n', bold: true, fontSize: 5,},
              {text: '17-03-2023', bold: true,},
            ],
            fontSize: 16,
            color: '#FFFFFF',
            absolutePosition: {x: 30, y: 20},
            alignment: 'right',
          },
          {
            text: 'Entregados por: Juan Perez',
            fontSize: 14,
            color: '#ffffff',
            alignment: 'left',
            absolutePosition: {x: 30, y: 115},
          }
        ]
      }
    });
    this.addComponent(
      {
        render() {
          return {
            text: '\n'
          };
        }
      }
    )
    this.addComponent(
      new SectionComponent('Venta total desglosada por tipo de pago')
        .setWidth(515)
        .setSectionColor('#0C2788')
        .setTextColor('#FFFFFF')
        .setAxisTextPosition(0, -20)
        .setTextBold()
    )
    const headers = [
      new TableCellComponent("Concepto").setFillColor('#DDFCF9'),
      new TableCellComponent("Cantidad").setAlignment('left').setFillColor('#DDFCF9'),
      new TableCellComponent("Venta").setAlignment('right').setFillColor('#DDFCF9')
    ]
    const productRows = this.deliveryData.ventaTotalDesglosadaConceptos.map(concept => [
      new TableCellComponent(`${concept.concepto}`).setMargin([0, 10, 0, 10]).setActivateBorder(true, false, true, true),
      new TableCellComponent(`${concept.cantidad}`).setMargin([0, 10, 0, 10]).setAlignment('center'),
      new TableCellComponent(`$ ${concept.venta.toFixed(2)}`).setMargin([0, 10, 0, 10]).setAlignment('right')
    ]);

    this.addComponent(
      new TableComponent()
        .setHeaders(headers)
        .setData(productRows)
        .setWidths([300, '*', '*'])
        .setPosition(0, 0)
    )
  }

  protected getStyles(): StyleDictionary {
    return {}
  }
}
