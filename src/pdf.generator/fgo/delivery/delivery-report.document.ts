import { DocumentTemplate } from '../../components/document.template';
import { Content } from 'pdfmake/interfaces';
import { SectionComponent } from '../../components/section.component';
import { TableCellComponent } from '../../components/tables/table-cell.component';
import { TableComponent } from '../../components/tables/table.component';
import { Alignments, Colors, Fonts, Logos, PageSizes } from '../../../styles/styles';
import { BackgroundComponent } from '../../components/background.component';

export class DeliveryReportDocument extends DocumentTemplate {
  constructor(private deliveryData: any) {
    super(`delivery-report-${deliveryData.id}.pdf`, PageSizes.A4);
    this.buildDocument();
  }

  private buildDocument(): void {
    this.addComponent(
      new SectionComponent({
        title: '',
        sectionPosition: { x: -40, y: -40 },
        textPosition: { x: 0, y: -40 },
        height: 152,
        weight: 600,
      }).setSectionColor(Colors.TOREA_BAY),
    );

    this.addComponent({
      render(): Content {
        return [
          {
            image: Logos.GO,
            relativePosition: { x: 40, y: -135 },
            width: 39.29,
            height: 23.59,
          },
          {
            text: 'F',
            style: Fonts.Roboto_700,
            color: Colors.WHITE,
            fontSize: 30,
            relativePosition: { x: 23.5, y: -137 },
          },
          {
            text: 'Repartidores',
            style: Fonts.Inter_600,
            color: Colors.WHITE,
            fontSize: 18,
            relativePosition: { x: 0, y: -100 },
          },
          {
            text: [
              { text: 'Reporte de entrega\n' },
              { text: '\n', fontSize: 5 },
              { text: '17-03-2023', font: Fonts.InterBold },
            ],
            fontSize: 16,
            color: Colors.WHITE,
            absolutePosition: { x: 30, y: 20 },
            alignment: Alignments.RIGHT,
          },
          {
            text: ['Entregados por   ', { text: 'Juan perez', font: Fonts.Inter_600 }],
            fontSize: 14,
            font: Fonts.Inter_400,
            color: Colors.WHITE,
            alignment: Alignments.LEFT,
            absolutePosition: { x: 30, y: 115 },
          },
        ];
      },
    });
    this.addComponent({
      render() {
        return {
          text: '\n',
        };
      },
    });

    this.addComponent(
      new SectionComponent(
        {
          title: 'Venta total desglosada por tipo de pago',
          textPosition: { x: 0, y: 175 },
          weight: 532,
          sectionPosition: { x: -10, y: 0 },
          height: 26,
        },
        {
          textFontSize: 12,
          textFont: Fonts.InterBold,
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
      new TableCellComponent('Total', { font: Fonts.Inter_600 })
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
        sectionPosition: { x: -40, y: 300 },
        textPosition: { x: 0, y: -20 },
      })
        .setSectionColor(Colors.VENICE_BLUE)
        .setTextColor(Colors.WHITE),
    );
  }
}
