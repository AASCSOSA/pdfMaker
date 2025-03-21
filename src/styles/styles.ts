import { Fonts } from "src/styles/fonts";

export enum Layouts {
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

export enum PageSizes {
  A4 = 'A4',
  LETTER = 'LETTER',
}

export const defaultStyle = {
  font: Fonts.InterRegular,
  fontSize: 10,
};