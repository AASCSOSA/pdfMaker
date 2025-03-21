import { OrderHeaderComponent } from '../../../components/order-header/order-header.component';
import { TableComponent } from '../../../components/tables/table.component';
import {
  SectionComponent,
  SectionConfigurationOptional,
  SectionConfigurationRequired,
} from '../../components/section.component';
import { DocumentTemplate } from '../../components/document.template';
import { TableCellComponent } from '../../../components/tables/table-cell.component';
import { Alignments, Colors, Fonts } from '../../../styles/styles';
import { FooterComponent } from '../../../components/footer/footer.component';

export class OrderFormDocument extends DocumentTemplate {
  constructor(private deliveryData: any) {
    super(`delivery-report-${deliveryData.id}.pdf`);
    this.buildDocument();
  }

  private buildDocument(): void {
    this.addComponent(new OrderHeaderComponent());
    this.addComponent({
      render: () => ({
        text: ' ',
        height: 13,
      }),
    });
    const conceptoHeader = new TableCellComponent('Concepto', {
      font: Fonts.RobotoBold,
      fontSize: 10,
    })
      .setFillColor(Colors.FOAM)
      .setMargin([10, 10, 0, 0]);
    const precioHeader = new TableCellComponent('Precio', {
      font: Fonts.InterBold,
      fontSize: 10,
    })
      .setFillColor(Colors.FOAM)
      .setMargin([0, 10, 10, 0])
      .setAlignment(Alignments.RIGHT);
    const dataRows = [
      [
        new TableCellComponent('Subtotal', {
          font: Fonts.InterRegular,
          fontSize: 10,
        }).setMargin([10, 18, 0, 0]),
        new TableCellComponent(`$ ${this.deliveryData.subtotal.toFixed(2)}`, {
          font: Fonts.InterRegular,
          fontSize: 10,
        })
          .setMargin([0, 18, 10, 0])
          .setAlignment(Alignments.RIGHT),
      ],
      [
        new TableCellComponent('Envío', {
          font: Fonts.InterRegular,
          fontSize: 10,
        }).setMargin([10, 18, 0, 0]),
        new TableCellComponent(`$ ${this.deliveryData.shipping.toFixed(2)}`, {
          font: Fonts.InterRegular,
          fontSize: 10,
        })
          .setMargin([0, 18, 10, 0])
          .setAlignment(Alignments.RIGHT),
      ],
      [
        new TableCellComponent('IVA', {
          font: Fonts.InterRegular,
          fontSize: 10,
        }).setMargin([10, 18, 0, 0]),
        new TableCellComponent(`$ ${this.deliveryData.tax.toFixed(2)}`, {
          font: Fonts.InterRegular,
          fontSize: 10,
        })
          .setMargin([0, 18, 10, 0])
          .setAlignment(Alignments.RIGHT),
      ],
      [
        new TableCellComponent('Total', {
          font: Fonts.InterSemiBold,
          fontSize: 10,
        }).setMargin([10, 18, 0, 0]),
        new TableCellComponent(`$ ${this.deliveryData.total.toFixed(2)}`, {
          font: Fonts.InterBold,
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
          textPosition: { x: 15, y: 269 },
          height: 26,
          weight: 532,
        },
        {
          textFont: Fonts.InterBold,
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

    this.addComponent(new FooterComponent());

    this.addComponent({
      render: () => ({ text: '', pageBreak: 'after' }),
    });
    const productHeaders = [
      new TableCellComponent('Descripción', {
        font: Fonts.RobotoBold,
        fontSize: 10,
      })
        .setFillColor(Colors.FOAM)
        .setAlignment(Alignments.LEFT)
        .setMargin([10, 12, 0, 0]),
      new TableCellComponent('Precio Unitario', {
        font: Fonts.RobotoBold,
        fontSize: 10,
      })
        .setFillColor(Colors.FOAM)
        .setAlignment(Alignments.LEFT)
        .setMargin([0, 12, 0, 0]),
      new TableCellComponent('Cant.', {
        font: Fonts.RobotoBold,
        fontSize: 10,
      })
        .setFillColor(Colors.FOAM)
        .setAlignment(Alignments.LEFT)
        .setMargin([0, 12, 0, 0]),
      new TableCellComponent('Subtotal', {
        font: Fonts.RobotoBold,
        fontSize: 10,
      })
        .setFillColor(Colors.FOAM)
        .setAlignment(Alignments.LEFT)
        .setMargin([0, 12, 0, 0]),
      new TableCellComponent('IVA', {
        font: Fonts.RobotoBold,
        fontSize: 10,
      })
        .setFillColor(Colors.FOAM)
        .setAlignment(Alignments.LEFT)
        .setMargin([0, 12, 0, 0]),
      new TableCellComponent('Total', {
        font: Fonts.RobotoBold,
        fontSize: 10,
      })
        .setFillColor(Colors.FOAM)
        .setAlignment(Alignments.LEFT)
        .setMargin([0, 12, 0, 0]),
    ];
    const productRows = this.deliveryData.products.map((product) => [
      new TableCellComponent('Aciclovir (Aciclovir) 400 mg 35', {
        font: Fonts.InterRegular,
        fontSize: 10,
      })
        .setAlignment(Alignments.LEFT)
        .setMargin([10, 16, 0, 0]),
      new TableCellComponent('$120.00', {
        font: Fonts.InterRegular,
        fontSize: 10,
      })
        .setMargin([0, 16, 0, 0]),
      new TableCellComponent('2', {
        font: Fonts.InterRegular,
        fontSize: 10,
      })
        .setMargin([0, 16, 0, 0])
        .setAlignment(Alignments.LEFT),
      new TableCellComponent('$240.00', {
        font: Fonts.InterRegular,
        fontSize: 10,
      })
        .setMargin([0, 16, 0, 0])
        .setAlignment(Alignments.LEFT),
      new TableCellComponent('$38.40', {
        font: Fonts.InterRegular,
        fontSize: 10,
      })
        .setMargin([0, 16, 0, 0])
        .setAlignment(Alignments.LEFT),
      new TableCellComponent('$278.40', {
        font: Fonts.InterRegular,
        fontSize: 10,
      })
        .setMargin([0, 16, 0, 0])
        .setAlignment(Alignments.LEFT),
    ]);
    this.addComponent(
      new SectionComponent(
        {
          title: 'Desglose de Productos',
          height: 26,
          weight: 595,
          textPosition: { x: 0, y: 5 },
          sectionPosition: { x: -40, y: -40 },
        } as SectionConfigurationRequired,
        {
          sectionColor: Colors.TOREA_BAY,
          textAlignment: Alignments.CENTER,
          textColor: Colors.WHITE,
          textFont: Fonts.InterBold,
          textFontSize: 12,
        } as SectionConfigurationOptional,
      ),
    );

    this.addComponent(
      new TableComponent()
        .setPosition(-40, -14)
        .setHeaders(productHeaders)
        .setData(productRows)
        .setRowHeights((rowIndex) => {
          if (rowIndex === 0) {
            return 36;
          }
          return 46;
        })
        .setWidths([170, 80, 57, 80, 80, 80]),
    );
  }
}
