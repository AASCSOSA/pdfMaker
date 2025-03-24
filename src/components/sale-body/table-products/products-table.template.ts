import { headerDescription, headerQuantity, productDescription, productQuantity } from "./products-table.style";
import {
  TitleTableComponent,
  TitleTableConfigurationOptional,
  TitleTableConfigurationRequired,
} from '../../section/titleTableComponent';
import { Colors } from '../../../styles/colors';
import { Layouts } from '../../../styles/styles';
import { Fonts } from '../../../styles/fonts';
import { TableComponent } from '../../tables/table.component';

export function CreateProductsTable(saleData) {
  const tableHeaders = [headerDescription, headerQuantity];
  const productRows = saleData.products.map((product) => [
    productDescription(product.description),
    productQuantity(product.quantity),
  ]);
  const tableTitle = new TitleTableComponent(
    {
      title: 'Desgloce de productos',
      height: 26,
      weight: 595,
      textPosition: { x: 44, y: 213 },
      sectionPosition: { x: -40, y: 167 },
    } as TitleTableConfigurationRequired,
    {
      sectionColor: Colors.ToreaBay,
      textAlignment: Layouts.Center,
      textColor: Colors.White,
      textFont: Fonts.InterBold,
      textFontSize: 12,
    } as TitleTableConfigurationOptional,
  );
  const table = new TableComponent()
    .setPosition(-40, 0)
    .setHeaders(tableHeaders)
    .setData(productRows)
    .setRowHeights((rowIndex) => {
      if (rowIndex === 0) {
        return 32; //headers
      }
      return 20;
    })
    .setWidths([500, 90]);

  return { tableTitle, table };
}
