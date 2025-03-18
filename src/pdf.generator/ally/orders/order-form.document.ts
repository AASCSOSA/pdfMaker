import { HeaderComponent } from '../../components/header/header.component';
import { TableComponent } from '../../components/tables/table.component';
import {
  SectionComponent,
  SectionConfigurationOptional,
  SectionConfigurationRequired,
} from '../../components/section.component';
import { DocumentTemplate } from '../../components/document.template';
import { TableCellComponent } from '../../components/tables/table-cell.component';
import { Alignments, Colors, Fonts } from '../../../styles/styles';

export class OrderFormDocument extends DocumentTemplate {
  constructor(private deliveryData: any) {
    super(`delivery-report-${deliveryData.id}.pdf`);
    this.buildDocument();
  }

  private buildDocument(): void {
    this.addComponent(new HeaderComponent());
    this.addComponent({
      render: () => ({
        text: ' ',
        height: 13,
      }),
    });
    const conceptoHeader = new TableCellComponent('Concepto', {
      font: Fonts.Roboto_700,
      fontSize: 10,
    })
      .setFillColor(Colors.FOAM)
      .setMargin([10, 10, 0, 0]);
    const precioHeader = new TableCellComponent('Precio', {
      font: Fonts.Inter_700,
      fontSize: 10,
    })
      .setFillColor(Colors.FOAM)
      .setMargin([0, 10, 10, 0])
      .setAlignment(Alignments.RIGHT);
    const dataRows = [
      [
        new TableCellComponent('Subtotal', {
          font: Fonts.Inter_400,
          fontSize: 10,
        }).setMargin([10, 18, 0, 0]),
        new TableCellComponent(`$ ${this.deliveryData.subtotal.toFixed(2)}`, {
          font: Fonts.Inter_400,
          fontSize: 10,
        })
          .setMargin([0, 18, 10, 0])
          .setAlignment(Alignments.RIGHT),
      ],
      [
        new TableCellComponent('Envío', {
          font: Fonts.Inter_400,
          fontSize: 10,
        }).setMargin([10, 18, 0, 0]),
        new TableCellComponent(`$ ${this.deliveryData.shipping.toFixed(2)}`, {
          font: Fonts.Inter_400,
          fontSize: 10,
        })
          .setMargin([0, 18, 10, 0])
          .setAlignment(Alignments.RIGHT),
      ],
      [
        new TableCellComponent('IVA', {
          font: Fonts.Inter_400,
          fontSize: 10,
        }).setMargin([10, 18, 0, 0]),
        new TableCellComponent(`$ ${this.deliveryData.tax.toFixed(2)}`, {
          font: Fonts.Inter_400,
          fontSize: 10,
        })
          .setMargin([0, 18, 10, 0])
          .setAlignment(Alignments.RIGHT),
      ],
      [
        new TableCellComponent('Total', {
          font: Fonts.Inter_600,
          fontSize: 10,
        }).setMargin([10, 18, 0, 0]),
        new TableCellComponent(`$ ${this.deliveryData.total.toFixed(2)}`, {
          font: Fonts.Inter_400,
          fontSize: 10,
        })
          .setMargin([0, 18, 10, 0])
          .setAlignment(Alignments.RIGHT),
      ],
    ];

    this.addComponent(
      new SectionComponent(
        {
          title: 'Desglose de Precio',
          sectionPosition: { x: 0, y: 0 },
          textPosition: { x: 0, y: 269 },
          height: 26,
          weight: 532,
        },
        {
          textFont: Fonts.Inter_700,
          textAlignment: Alignments.CENTER,
          textFontSize: 12,
        },
      )
        .setTextColor(Colors.WHITE)
        .setSectionColor(Colors.TOREA_BAY),
    );
    this.addComponent(
      new TableComponent()
        .setPosition(0, 0)
        .setHeaders([conceptoHeader, precioHeader])
        .setData(dataRows)
        .setRowHeights((rowIndex) => {
          if (rowIndex === 0) {
            return 36;
          }
          return 46;
        })
        .setWidths(['*', 462]),
    );
    this.addComponent({
      render: () => ({
        text: '\n',
        height: 13,
      }),
    });
    //this.addComponent(new FooterComponent());

    this.addComponent({
      render: () => ({ text: '', pageBreak: 'after' }),
    });
    const productHeaders = [
      new TableCellComponent('Descripción')
        .setFillColor('#E6F7F7')
        .setAlignment('left')
        .setMargin([0, 8, 0, 0]),
      new TableCellComponent('Precio Unitario')
        .setFillColor('#E6F7F7')
        .setAlignment('left')
        .setMargin([0, 8, 0, 0]),
      new TableCellComponent('Cant.')
        .setFillColor('#E6F7F7')
        .setAlignment('center')
        .setMargin([0, 8, 0, 0]),
      new TableCellComponent('Subtotal')
        .setFillColor('#E6F7F7')
        .setAlignment('center')
        .setMargin([0, 8, 0, 0]),
      new TableCellComponent('IVA')
        .setFillColor('#E6F7F7')
        .setAlignment('center')
        .setMargin([0, 8, 0, 0]),
      new TableCellComponent('Total')
        .setFillColor('#E6F7F7')
        .setAlignment('center')
        .setMargin([0, 8, 0, 0]),
    ];
    const productRows = this.deliveryData.products.map((product) => [
      new TableCellComponent(product.description),
      new TableCellComponent(`$ ${product.unitPrice.toFixed(2)}`).setAlignment(
        'right',
      ),
      new TableCellComponent(product.quantity.toString()).setAlignment(
        'center',
      ),
      new TableCellComponent(`$ ${product.subtotal.toFixed(2)}`).setAlignment(
        'right',
      ),
      new TableCellComponent(`$ ${product.iva.toFixed(2)}`).setAlignment(
        'right',
      ),
      new TableCellComponent(`$ ${product.total.toFixed(2)}`).setAlignment(
        'right',
      ),
    ]);
    this.addComponent(
      new SectionComponent(
        {
          title: 'Desglose de Productos',
          height: 36,
          weight: 595,
          textPosition: { x: 10, y: -35 },
          sectionPosition: { x: 0, y: -35 },
        } as SectionConfigurationRequired,
        {
          sectionColor: Colors.BLUE_RIBBON,
          textAlignment: Alignments.CENTER,
          textColor: Colors.BLUE_RIBBON,
          textFont: Fonts.Inter_400,
          textFontSize: 30,
        } as SectionConfigurationOptional,
      ),
    );

    this.addComponent(
      new TableComponent()
        .setPosition(-40, 20)
        .setHeaders(productHeaders)
        .setData(productRows)
        .setWidths([220, 80, 30, 70, 60, 80]),
    );
  }
}
