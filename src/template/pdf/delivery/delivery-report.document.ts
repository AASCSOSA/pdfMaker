import { DocumentTemplate } from '../../../shared/document.template';
import { SectionComponent } from '../../../components/section/section.component';
import { PageSizes } from '../../../styles/styles';
import { Colors } from "../../../styles/colors";

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
      }).setSectionColor(Colors.ToreaBay),
    );

    /*this.addComponent({
      render(): Content {
        return [
          {
            image: Logos.GO,
            relativePosition: {x: 34, y: -152+32},
            width: 39.29,
            height: 23.59,
          },
          {
            text: 'F',
            style: {font: Fonts.Roboto_900},
            color: Colors.White,
            fontSize: 30,
            relativePosition: {x: 18, y: -152+26.5},
          } as ContentText,
          {
            text: 'Repartidores',
            style: {font: Fonts.Inter_600},
            color: Colors.White,
            fontSize: 18,
            characterSpacing : 0.5,

            relativePosition: {x: -40+33, y: -152+58.5},
          },
          {
            text: 'Reporte de Pedidos',
            font: Fonts.Inter_400,
            fontSize: 17,
            characterSpacing:0.3,
            relativePosition: {x: 372, y: -152+29},
            color: Colors.White,
          },
          {
            text: ['Entregados por   ', {text: 'Juan Perez', font: Fonts.Inter_600, fontSize: 14, color: Colors.White}],
            fontSize: 15,
            font: Fonts.Inter_400,
            color: Colors.White,
            alignment: Layouts.Left,
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
          sectionColor: Colors.ToreaBay,
        },
      ),
    );
    //RULER
    /!*this.addComponent(
      new BackgroundComponent({
        color: Colors.Red,
        width: 532,
        height: 36,
        position: {x: 30, y: 196},
      })
    );*!/
    const headers = [
      new TableCellComponent('Concepto', {
        font: Fonts.Roboto_700,
        fontSize: 10,
        fillColor: Colors.Black,
      })
        .setFillColor(Colors.Foam)
        .setMargin([5, 10, 0, 10])
        .setActivateBorder(false, false, false, false),
      new TableCellComponent('Cantidad', {
        font: Fonts.Roboto_700,
        fontSize: 10,
        fillColor: Colors.Black,
      })
        .setFillColor(Colors.Foam)
        .setAlignment(Layouts.Center)
        .setMargin([0, 10, 0, 10])
        .setActivateBorder(false, false, false, false),
      new TableCellComponent('Venta', {
        font: Fonts.Roboto_700,
        fontSize: 10,
        fillColor: Colors.Black,
      })
        .setFillColor(Colors.Foam)
        .setAlignment(Layouts.Right)
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
            .setAlignment(Layouts.Center)
            .setActivateBorder(false, true, false, true),
          new TableCellComponent(`$ ${value.venta.toFixed(2)}`)
            .setMargin([0, 10, 0, 10])
            .setAlignment(Layouts.Right)
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
      render: () => ({ text: '', pageBreak: 'after' }),
    });
    this.addComponent(
      new SectionComponent({
        title: 'Pedidos pagados en efectivo',
        weight: 595,
        height: 26,
        sectionPosition: {x: -40, y: 300},
        textPosition: {x: 0, y: -20},
      })
        .setSectionColor(Colors.VeniceBlue)
        .setTextColor(Colors.White),
    );
*/
  }
}
