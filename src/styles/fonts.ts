import { TFontDictionary } from "pdfmake/interfaces";
import path from "path";

export interface FontsI {
  InterRegular: string;
  InterMedium: string;
  InterSemiBold: string;
  InterBold: string;
  RobotoRegular: string;
  RobotoMedium: string;
  RobotoSemiBold: string;
  RobotoBold: string;
  RobotoExtraBold: string;
}

export const Fonts: FontsI = {
  InterRegular: 'InterRegular',
  InterMedium: 'InterMedium',
  InterSemiBold: 'InterSemiBold',
  InterBold: 'InterBold',
  RobotoRegular: 'RobotoRegular',
  RobotoMedium: 'RobotoMedium',
  RobotoSemiBold: 'RobotoSemiBold',
  RobotoBold: 'RobotoBold',
  RobotoExtraBold: 'RobotoExtraBold',
}

export const PdfFonts: TFontDictionary = {
  InterRegular: {
    normal: path.resolve('src/assets/fonts/Inter_400.ttf'),
  },
  InterMedium: {
    normal: path.resolve('src/assets/fonts/Inter_500.ttf'),
  },
  InterSemiBold: {
    normal: path.resolve('src/assets/fonts/Inter_600.ttf'),
  },
  InterBold: {
    normal: path.resolve('src/assets/fonts/Inter_700.ttf'),
  },
  RobotoRegular: {
    normal: path.resolve('src/assets/fonts/Roboto_400.ttf'),
  },
  RobotoMedium: {
    normal: path.resolve('src/assets/fonts/Roboto_500.ttf'),
  },
  RobotoSemiBold: {
    normal: path.resolve('src/assets/fonts/Roboto_600.ttf'),
  },
  RobotoBold: {
    normal: path.resolve('src/assets/fonts/Roboto_700.ttf'),
  },
};
