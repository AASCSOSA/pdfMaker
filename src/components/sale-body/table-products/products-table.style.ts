import { Fonts } from '../../../styles/fonts';
import { TableCellComponent } from '../../tables/table-cell.component';
import { Colors } from '../../../styles/colors';
import { Layouts } from '../../../styles/styles';

const headerText = {
  font: Fonts.RobotoSemiBold,
  fontSize: 10,
};

export const headerDescription = new TableCellComponent('Descripción', {
  ...headerText,
})
  .setFillColor(Colors.Foam)
  .setAlignment(Layouts.Left)
  .setMargin([10, 10, 0, 0])
  .setActivateBorder(false, false, false, false);
export const headerQuantity = new TableCellComponent('Cantidad', {
  ...headerText,
})
  .setActivateBorder(false, false, false, true)
  .setFillColor(Colors.Foam)
  .setAlignment(Layouts.Right)
  .setMargin([0, 10, 35, 0]);

export const productDescription = (description: string) =>
  new TableCellComponent(description, {
    font: Fonts.InterRegular,
  })
    .setMargin([10, 6, 0, 6])
    .setAlignment(Layouts.Left);

export const productQuantity = (quantity: number) =>
  new TableCellComponent(quantity.toString(), {
    font: Fonts.InterRegular,
    fontSize: 10,
  })
    .setMargin([0, 6, 20, 6])
    .setAlignment(Layouts.Center);
