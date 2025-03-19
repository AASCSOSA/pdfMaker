import { DocumentTemplate } from '../../components/document.template';
import { Content } from 'pdfmake/interfaces';
import { SectionComponent } from '../../components/section.component';
import { TableCellComponent } from '../../components/tables/table-cell.component';
import { TableComponent } from '../../components/tables/table.component';
import { Alignments, Colors, Fonts, Logos, PageSizes } from '../../../styles/styles';

export class DeliveryReportDocument extends DocumentTemplate {
  constructor(private deliveryData: any) {
    super(`delivery-report-${deliveryData.id}.pdf`, PageSizes.A4);
    this.buildDocument();
  }

  private buildDocument(): void {
    this.addComponent(
      new SectionComponent({
        title: '',
        sectionPosition: {x: -40, y: -40},
        textPosition: {x: 0, y: -40},
        height: 152,
        weight: 596,
      }).setSectionColor(Colors.TOREA_BAY),
    );

    this.addComponent({
      render(): Content {
        return [
          {
            image: Logos.GO,
            relativePosition: {x: 32, y: -152+32},
            width: 39.29,
            height: 23.59,
          },
          {
            text: 'F',
            style: {font: Fonts.Inter_700},
            color: Colors.WHITE,
            fontSize: 30,
            relativePosition: {x: 15, y: -152+25},
          },
          {
            text: 'Repartidores',
            style: {font: Fonts.Inter_600},
            color: Colors.WHITE,
            fontSize: 18,
            characterSpacing : 1,
            relativePosition: {x: -40+30, y: -152+57},
          },
          {
            text: 'Reporte de Pedidos',
            font: Fonts.Inter_400,
            fontSize: 16,
            characterSpacing:0.3,
            relativePosition: {x: 372, y: -152+29},
            color: Colors.WHITE,
          },
          {
            text: ['Entregados por   ', {text: 'Juan Perez', font: Fonts.Inter_600, fontSize: 14, color: Colors.WHITE}],
            fontSize: 15,
            font: Fonts.Inter_400,
            color: Colors.WHITE,
            alignment: Alignments.LEFT,
            absolutePosition: {x: 30, y: 115},
          },
        ];
      },
    });
    this.addComponent({
      render(): Content {
        return {
          text: '',
        };
      },
    });

    this.addComponent(
      new SectionComponent(
        {
          title: 'Venta total desglosada por tipo de pago',
          textPosition: {x: 0, y: 175},
          weight: 532,
          sectionPosition: {x: -10, y: 13},
          height: 26,
        },
        {
          textFontSize: 12,
          textFont: Fonts.Inter_700,
          sectionColor: Colors.TOREA_BAY,
        },
      ),
    );
    //RULER
    /*this.addComponent(
      new BackgroundComponent({
        color: Colors.RED,
        width: 532,
        height: 36,
        position: {x: 30, y: 196},
      })
    );*/
    const headers = [
      new TableCellComponent('Concepto', {
        font: Fonts.Roboto_700,
        fontSize: 10,
        fillColor: Colors.BLACK,
      })
        .setFillColor(Colors.FOAM)
        .setMargin([5, 10, 0, 10])
        .setActivateBorder(false, false, false, false),
      new TableCellComponent('Cantidad', {
        font: Fonts.Roboto_700,
        fontSize: 10,
        fillColor: Colors.BLACK,
      })
        .setFillColor(Colors.FOAM)
        .setAlignment(Alignments.CENTER)
        .setMargin([0, 10, 0, 10])
        .setActivateBorder(false, false, false, false),
      new TableCellComponent('Venta', {
        font: Fonts.Roboto_700,
        fontSize: 10,
        fillColor: Colors.BLACK,
      })
        .setFillColor(Colors.FOAM)
        .setAlignment(Alignments.RIGHT)
        .setMargin([0, 10, 5.5, 10])
        .setActivateBorder(false, false, false, false),
    ];
    const productRows = this.deliveryData.ventaTotalDesglosadaConceptos.map(
      (value: { concepto: string; cantidad: number; venta: number }) => {
        return [
          new TableCellComponent(`${value.concepto}`, {
            font: Fonts.Inter_400,
            fontSize: 10,
          })
            .setMargin([5, 12, 0, 10])
            .setActivateBorder(true, true, false, true),
          new TableCellComponent(`${value.cantidad}`)
            .setMargin([0, 10, 0, 10])
            .setAlignment(Alignments.CENTER)
            .setActivateBorder(false, true, false, true),
          new TableCellComponent(`$ ${value.venta.toFixed(2)}`)
            .setMargin([0, 10, 0, 10])
            .setAlignment(Alignments.RIGHT)
            .setActivateBorder(false, true, true, true),
        ];
      },
    );
    productRows.push([
      new TableCellComponent('Total', {font: Fonts.Inter_600})
        .setMargin([0, 10, 0, 10])
        .setActivateBorder(true, true, false, true),
      new TableCellComponent(
        `${this.deliveryData.ventaTotalDesglosadaConceptos.reduce((acc, concept) => acc + concept.cantidad, 0)}`,
      )
        .setMargin([0, 0, 0, 0])
        .setAlignment('center'),
      new TableCellComponent(
        `$ ${this.deliveryData.ventaTotalDesglosadaConceptos
          .reduce((acc, concept) => acc + concept.venta, 0)
          .toFixed(2)}`,
      )
        .setMargin([0, 10, 0, 10])
        .setAlignment('right')
        .setActivateBorder(false, true, true, true),
    ]);
    this.addComponent(
      new TableComponent()
        .setHeaders(headers)
        .setData(productRows)
        .setWidths([200, 100, 204])
        .setPosition(-10, 0),
    );
    this.addComponent({
      render() {
        return {
          text: '\n',
        };
      },
    });
    this.addComponent(
      new SectionComponent({
        title: 'Pedidos pagados en efectivo',
        weight: 595,
        height: 26,
        sectionPosition: {x: -40, y: 300},
        textPosition: {x: 0, y: -20},
      })
        .setSectionColor(Colors.VENICE_BLUE)
        .setTextColor(Colors.WHITE),
    );
  }
}
