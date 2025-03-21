import { TableCellComponent } from "../../tables/table-cell.component";
import { Layouts} from "../../../styles/styles";
import { Colors } from "../../../styles/colors";
import { Fonts } from "../../../styles/fonts";

export const HeaderCellStyle = {
  font: Fonts.RobotoBold,
  fontSize: 10,
};

export const BodyCellStyle = {
  font: Fonts.InterRegular,
  fontSize: 10,
};

export const ConceptoHeader: TableCellComponent = new TableCellComponent('Concepto', HeaderCellStyle)
  .setFillColor(Colors.Foam)
  .setActivateBorder(false, false, false, false)
  .setMargin([10, 10, 0, 0]);

export const PrecioHeader = new TableCellComponent('Precio', HeaderCellStyle)
  .setActivateBorder(false, false, false, false)
  .setFillColor(Colors.Foam)
  .setMargin([0, 9, 10, 2])
  .setAlignment(Layouts.Right);

export const SubtotalRow = new TableCellComponent('Subtotal', {
  font: Fonts.InterRegular,
  fontSize: 10,
}).setMargin([10, 14, 0, 0]);

export const SubtotalValueRow = (value: number) => (
  new TableCellComponent(`$ ${value.toFixed(2)}`, {
    font: Fonts.InterRegular,
    fontSize: 10,
  }).setMargin([0, 14, 10, 0])
    .setAlignment(Layouts.Right));

export const EnvioRow = new TableCellComponent('Envío', {
  font: Fonts.InterRegular,
  fontSize: 10,
}).setMargin([10, 14, 0, 0]);

export const EnvioValueRow = (value: number) => (
  new TableCellComponent(`$ ${value.toFixed(2)}`, {
    font: Fonts.InterRegular,
    fontSize: 10,
  }).setMargin([0, 14, 10, 0])
    .setAlignment(Layouts.Right));

export const IVARow = new TableCellComponent('IVA', {
  font: Fonts.InterRegular,
  fontSize: 10,
}).setMargin([10, 14, 0, 0]);

export const IVAValueRow = (value: number) => (
  new TableCellComponent(`$ ${value.toFixed(2)}`, {
    font: Fonts.InterRegular,
    fontSize: 10,
  }).setMargin([0, 14, 10, 0])
    .setAlignment(Layouts.Right));

export const TotalRow = new TableCellComponent('Total', {
  font: Fonts.InterSemiBold,
  fontSize: 10,
}).setMargin([10, 14, 0, 0]);

export const TotalValueRow = (value: number) => (
  new TableCellComponent(`$ ${value.toFixed(2)}`, {
    font: Fonts.InterBold,
    fontSize: 10,
  }).setMargin([0, 14, 10, 0])
    .setAlignment(Layouts.Right));