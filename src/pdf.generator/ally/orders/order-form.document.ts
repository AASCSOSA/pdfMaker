import { HeaderComponent } from '../../components/header/header.component';
import { TableComponent } from '../../components/tables/table.component';
import {
  SectionComponent,
  SectionConfigurationOptional,
  SectionConfigurationRequired,
} from '../../components/section.component';
import { DocumentTemplate } from '../../components/document.template';
import { TableCellComponent } from '../../components/tables/table-cell.component';
import { FooterComponent } from '../../components/footer/footer.component';
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
    const conceptoHeader = new TableCellComponent('Concepto').setFillColor(Colors.FOAM);

    const precioHeader = new TableCellComponent('Precio')
      .setFillColor(Colors.FOAM)
      .setAlignment('right')
      .setActivateBorder(false, true, false, true);
    const dataRows = [
      [
        new TableCellComponent('Subtotal').setMargin([0, 10, 0, 10]),
        new TableCellComponent(`$ ${this.deliveryData.subtotal.toFixed(2)}`)
          .setMargin([0, 10, 0, 10])
          .setActivateBorder(true, false, true, true)
          .setAlignment('right'),
      ],
      [
        new TableCellComponent('Envío').setMargin([0, 10, 0, 10]),
        new TableCellComponent(`$ ${this.deliveryData.shipping.toFixed(2)}`)
          .setMargin([0, 10, 0, 10])
          .setAlignment('right'),
      ],
      [
        new TableCellComponent('IVA').setMargin([0, 10, 0, 10]),
        new TableCellComponent(`$ ${this.deliveryData.tax.toFixed(2)}`)
          .setMargin([0, 10, 0, 10])
          .setAlignment('right'),
      ],
      [
        new TableCellComponent('Total').setMargin([0, 10, 0, 10]),
        new TableCellComponent(`$ ${this.deliveryData.total.toFixed(2)}`)
          .setMargin([0, 10, 0, 10])
          .setAlignment('right'),
      ],
    ];

    this.addComponent(
      new SectionComponent(
        {
          title: 'Desglose de Precio',
          sectionPosition: { x: 0, y: 0 },
          textPosition: { x: 0, y: -20.35 },
          height: 26,
          weight: 515,
        },
        { textFont: Fonts.InterBold, textAlignment: Alignments.CENTER, textFontSize: 12 },
      )
        .setTextColor(Colors.WHITE)
        .setSectionColor(Colors.TOREA_BAY),
    );
    this.addComponent(
      new TableComponent()
        .setPosition(0, 0)
        .setHeaders([conceptoHeader, precioHeader])
        .setData(dataRows)
        .setWidths(['*', 80]),
    );
    this.addComponent(new FooterComponent());

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
      new TableCellComponent(product.description).setMargin([0, 15, 0, 0]),
      new TableCellComponent(`$ ${product.unitPrice.toFixed(2)}`)
        .setMargin([0, 15, 0, 0])
        .setAlignment('right'),
      new TableCellComponent(product.quantity.toString())
        .setMargin([0, 15, 0, 0])
        .setAlignment('center'),
      new TableCellComponent(`$ ${product.subtotal.toFixed(2)}`)
        .setMargin([0, 15, 0, 0])
        .setAlignment('right'),
      new TableCellComponent(`$ ${product.iva.toFixed(2)}`)
        .setMargin([0, 15, 0, 0])
        .setAlignment('right'),
      new TableCellComponent(`$ ${product.total.toFixed(2)}`)
        .setMargin([0, 15, 0, 0])
        .setAlignment('right'),
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
          textFont: Fonts.InterNormal,
          textFontSize: 30,
        } as SectionConfigurationOptional,
      ),
    );

    this.addComponent(
      new TableComponent()
        .setPosition(-40, -14)
        .setHeaders(productHeaders)
        .setData(productRows)
        .setWidths([220, 80, 30, 70, 60, 80]),
    );
  }
}
