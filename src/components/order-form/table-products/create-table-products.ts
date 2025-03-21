import {
  headerDescription,
  headerIva,
  headerPrice,
  headerQuantity,
  headerSubtotal,
  headerTotal,
  productDescription, productIva, productQuantity, productSubtotal, productTotal,
  productUnitPrice
} from "./products-table-style";
import {
  TitleTableComponent,
  TitleTableConfigurationOptional,
  TitleTableConfigurationRequired
} from "../../section/titleTableComponent";
import { Colors } from "../../../styles/colors";
import { Layouts } from "../../../styles/styles";
import { Fonts } from "../../../styles/fonts";
import { TableComponent } from "../../tables/table.component";

export function CreateTableProducts(deliveryData) {
  const productHeaders = [
    headerDescription,
    headerPrice,
    headerQuantity,
    headerSubtotal,
    headerIva,
    headerTotal
  ];
  const productRows = deliveryData.products.map((product) => [
    productDescription(product.description),
    productUnitPrice(product.unitPrice),
    productQuantity(product.quantity),
    productSubtotal(product.subtotal),
    productIva(product.iva),
    productTotal(product.total)
  ]);
  const section = new TitleTableComponent(
    {
      title: 'Desglose de Productos',
      height: 25.7,
      weight: 595,
      textPosition: {x: 33, y: 5},
      sectionPosition: {x: -40, y: -40},
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
    .setPosition(-40, -15)
    .setHeaders(productHeaders)
    .setData(productRows)
    .setRowHeights((rowIndex) => {
      if (rowIndex === 0) {
        return 32; //headers
      }
      return 42;
    })
    .setWidths([221, 80, 40, 70, 70, 70]);

  return {section, table};
}