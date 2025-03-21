import { TableCellComponent } from "../../tables/table-cell.component";
import { Colors } from "../../../styles/colors";
import { Layouts } from "../../../styles/styles";
import { Fonts } from "../../../styles/fonts";

const headerStyle = {
  font: Fonts.RobotoBold,
  fontSize: 10,
}
export const headerDescription = new TableCellComponent('Descripción', {
  ...headerStyle
}).setFillColor(Colors.Foam).setAlignment(Layouts.Left).setMargin([10, 10, 0, 0])
  .setActivateBorder(false, false, false, false);

export const headerPrice = new TableCellComponent('Precio Unitario', {
  ...headerStyle
}).setActivateBorder(false, false, false, false)
  .setFillColor(Colors.Foam)
  .setAlignment(Layouts.Left)
  .setMargin([0, 10, 0, 0]);

export const headerQuantity = new TableCellComponent('Cant.', {
  ...headerStyle
}).setActivateBorder(false, false, false, true)
  .setFillColor(Colors.Foam)
  .setAlignment(Layouts.Left)
  .setMargin([0, 10, 0, 0]);

export const headerSubtotal = new TableCellComponent('Subtotal', {
  ...headerStyle
}).setActivateBorder(false, false, false, false)
  .setFillColor(Colors.Foam)
  .setAlignment(Layouts.Left)
  .setMargin([0, 10, 0, 0]);

export const headerIva = new TableCellComponent('IVA', {
  ...headerStyle
})
  .setActivateBorder(false, false, false, false)
  .setFillColor(Colors.Foam)
  .setAlignment(Layouts.Left)
  .setMargin([0, 10, 0, 0]);

export const headerTotal = new TableCellComponent('Total', {
  ...headerStyle
})
  .setActivateBorder(false, false, false, false)
  .setFillColor(Colors.Foam)
  .setAlignment(Layouts.Left)
  .setMargin([0, 10, 0, 0]);

// Product rows
export const productDescription = (description: string) =>
  new TableCellComponent(description, {
    font: Fonts.InterRegular,
    fontSize: 10,
  }).setAlignment(Layouts.Left)
    .setMargin([10, 14, 30, 0]);

export const productUnitPrice = (unitPrice: number) =>
  new TableCellComponent(`\$${unitPrice}.00`, {
    font: Fonts.InterRegular,
    fontSize: 10,
  }).setMargin([0, 14, 0, 0]);

export const productQuantity = (quantity: number) =>
  new TableCellComponent('2', {
    font: Fonts.InterRegular,
    fontSize: 10,
  }).setMargin([0, 14, 0, 0])
    .setAlignment(Layouts.Left);

export const productSubtotal = (subtotal: number) =>
  new TableCellComponent('$240.00', {
    font: Fonts.InterRegular,
    fontSize: 10,
  }).setMargin([0, 14, 0, 0])
    .setAlignment(Layouts.Left);

export const productIva = (iva: number) =>
  new TableCellComponent('$38.40', {
    font: Fonts.InterRegular,
    fontSize: 10,
  }).setMargin([0, 14, 0, 0])
    .setAlignment(Layouts.Left);

export const productTotal = (total: number) =>
  new TableCellComponent('$278.40', {
    font: Fonts.InterRegular,
    fontSize: 10,
  }).setMargin([0, 14, 0, 0])
    .setAlignment(Layouts.Left);