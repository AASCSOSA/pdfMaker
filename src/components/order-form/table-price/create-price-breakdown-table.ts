import { SectionComponent } from '../../section/section.component';

import { TableComponent } from '../../tables/table.component';
import { Layouts } from '../../../styles/styles';
import { TableCellComponent } from '../../tables/table-cell.component';
import { Fonts } from '../../../styles/fonts';
import { Colors } from '../../../styles/colors';
import {
  ConceptoHeader,
  EnvioRow,
  EnvioValueRow,
  IVARow,
  IVAValueRow,
  PrecioHeader,
  SubtotalRow,
  SubtotalValueRow,
  TotalRow,
  TotalValueRow,
} from './price-breakdown-style';

export function CreatePriceBreakdownSection(deliveryData) {
  const headers: TableCellComponent[] = [ConceptoHeader, PrecioHeader];

  const dataRows = [
    [SubtotalRow, SubtotalValueRow(deliveryData.subtotal)],
    [EnvioRow, EnvioValueRow(deliveryData.shipping)],
    [IVARow, IVAValueRow(deliveryData.tax)],
    [TotalRow, TotalValueRow(deliveryData.total)],
  ];

  const section = new SectionComponent(
    {
      title: 'Desglose de Precio',
      sectionPosition: { x: -9, y: 13.2 },
      textPosition: { x: 30, y: 264 },
      height: 25.7,
      weight: 532,
    },
    {
      textFont: Fonts.InterBold,
      textAlignment: Layouts.Center,
      textFontSize: 12,
    },
  )
    .setTextColor(Colors.White)
    .setSectionColor(Colors.ToreaBay);

  const table = new TableComponent()
    .setPosition(-9, -1)
    .setHeaders(headers)
    .setData(dataRows)
    .setWidthOfBorders(2)
    .setRowHeights((rowIndex) => {
      if (rowIndex === 0) {
        return 32;
      }
      return 40;
    })
    .setWidths(['*', 461]);

  return { section, table };
}
