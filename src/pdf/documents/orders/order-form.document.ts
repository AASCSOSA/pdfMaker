import { OrderHeaderComponent } from '../../../components/order-header/order-header.component';
import { TableComponent } from '../../../components/tables/table.component';
import { TableCellComponent } from '../../../components/tables/table-cell.component';
import { Alignments, Colors, Fonts } from '../../../styles/styles';
import { FooterComponent } from '../../../components/footer/footer.component';
import { DocumentTemplate } from "../../../shared/document.template";
import {
  SectionComponent,
  SectionConfigurationOptional,
  SectionConfigurationRequired
} from "../../../components/section/section.component";

export class OrderFormDocument extends DocumentTemplate {
  constructor(private deliveryData: any) {
    super(`delivery-report-${deliveryData.id}.pdf`);
    this.buildDocument();
  }

  private buildDocument(): void {
    this.addComponent(new OrderHeaderComponent());
    const conceptoHeader = new TableCellComponent('Concepto', {
      font: Fonts.RobotoBold,
      fontSize: 10,
    }).setFillColor(Colors.FOAM)
      .setActivateBorder(false, false, false, false)
      .setMargin([10, 10, 0, 0]);
    const precioHeader = new TableCellComponent('Precio', {
      font: Fonts.InterBold,
      fontSize: 10,
    }).setActivateBorder(false, false, false, false)
      .setFillColor(Colors.FOAM)
      .setMargin([0, 9, 10, 2])
      .setAlignment(Alignments.RIGHT);
    const dataRows = [
      [
        new TableCellComponent('Subtotal', {
          font: Fonts.InterRegular,
          fontSize: 10,
        }).setMargin([10, 14, 0, 0]),
        new TableCellComponent(`$ ${this.deliveryData.subtotal.toFixed(2)}`, {
          font: Fonts.InterRegular,
          fontSize: 10,
        }).setMargin([0, 14, 10, 0])
          .setAlignment(Alignments.RIGHT),
      ],
      [
        new TableCellComponent('Envío', {
          font: Fonts.InterRegular,
          fontSize: 10,
        }).setMargin([10, 14, 0, 0]),
        new TableCellComponent(`$ ${this.deliveryData.shipping.toFixed(2)}`, {
          font: Fonts.InterRegular,
          fontSize: 10,
        })
          .setMargin([0, 14, 10, 0])
          .setAlignment(Alignments.RIGHT),
      ],
      [
        new TableCellComponent('IVA', {
          font: Fonts.InterRegular,
          fontSize: 10,
        }).setMargin([10, 14, 0, 0]),
        new TableCellComponent(`$ ${this.deliveryData.tax.toFixed(2)}`, {
          font: Fonts.InterRegular,
          fontSize: 10,
        })
          .setMargin([0, 14, 10, 0])
          .setAlignment(Alignments.RIGHT),
      ],
      [
        new TableCellComponent('Total', {
          font: Fonts.InterSemiBold,
          fontSize: 10,
        }).setMargin([10, 14, 0, 0]),
        new TableCellComponent(`$ ${this.deliveryData.total.toFixed(2)}`, {
          font: Fonts.InterBold,
          fontSize: 10,
        })
          .setMargin([0, 14, 10, 0])
          .setAlignment(Alignments.RIGHT),
      ],
    ];

    this.addComponent(
      new SectionComponent(
        {
          title: 'Desglose de Precio',
          sectionPosition: {x: -9, y: 13.2},
          textPosition: {x: 30, y: 264},
          height: 25.7,
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
        .setPosition(-9, -1)
        .setHeaders([conceptoHeader, precioHeader])
        .setData(dataRows)
        .setWidthOfBorders(2)
        .setRowHeights((rowIndex) => {
          if (rowIndex === 0) {
            return 32;
          }
          return 40;
        })
        .setWidths(['*', 461]),
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
        .setMargin([10, 12, 0, 0])
        .setActivateBorder(false, false, false, false)
      ,
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
      new TableCellComponent('Aciclovir/ Lidocaina (Aciclovir,Lidocaína)\n5 mg/2 mg 1 Aerosol', {
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
            return 32;
          }
          return 40;
        })
        .setWidths([200, 80, 57, 80, 80, 80]),
    );
  }
}
