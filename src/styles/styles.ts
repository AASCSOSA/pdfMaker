//import * as fs from 'node:fs';
export enum Colors {
  VENICE_BLUE = '#08669B',
  WHITE = '#FFFFFF',
  TOREA_BAY = '#0C2788',
  FOAM = '#DDFCF9',
  DENIM = '#006EFF',
  BLUE_RIBBON = '#026EFA',
  HAWKES_BLUE = '#EBF2FE',
  MIDNIGHT_BLUE = '#00366A',
  BLACK = '#111118',
  RED = '#FF0000',
}

export enum Alignments {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export enum LogoKeys {
  ALLY = 'ALLY',
  FGO = 'FGO',
  GO = 'GO',
  FARMA_GO = 'FARMA_GO',
  LOGOBBVA = 'LOGOBBVA',
  LOGOSANTANDER = 'LOGOSANTANDER',
  FARMA_GO = 'FARMA_GO',
}

export const Logos: Record<LogoKeys, string> = {
  [LogoKeys.ALLY]: 'assets/img/logo-ally.png',
  [LogoKeys.FGO]: 'assets/img/logo-fgo.png',
  [LogoKeys.GO]: 'assets/img/go.png',
  [LogoKeys.FARMA_GO]: 'assets/img/FarmaGO.png',
  [LogoKeys.LOGOBBVA]: 'assets/img/logo-BBVA.png',
  [LogoKeys.LOGOSANTANDER]: 'assets/img/logo-santander.png',
  [LogoKeys.FARMA_GO]: 'assets/img/FarmaGO.png',
};

export enum Fonts {
  InterNormal = 'normal',
  InterBold = 'bold',
  InterItalics = 'italics',
  InterBoldItalics = 'bolditalics',
  RobotoNormal = 'robotoNormal',
  RobotoBold = 'robotoBold',
  RobotoBoldItalics = 'robotoBoldItalics',
  RobotoItalics = 'robotoItalics',
  Inter_400 = 'Inter_400',
  Inter_500 = 'Inter_500',
  Inter_600 = 'Inter_600',
  Inter_700 = 'Inter_700',
  Roboto_700 = 'Roboto_700',
  Roboto_600 = 'Roboto_600',
  Roboto_500 = 'Roboto_500',
  Roboto_400 = 'Roboto_400',
  Roboto_900 = 'Roboto_900',
}

export enum PageSizes {
  A4 = 'A4',
  LETTER = 'LETTER',
}
export const defaultStyle = {
  font: Fonts.Inter_400,
  fontSize: 10,
};


/*Ejemplo de estilo sugerido*/

export const headerStyle400 = {
  fontSize: 10,
  color: Colors.WHITE,
};

export const headerStyle500 = {
  ...headerStyle400,
  font: Fonts.Inter_500,
};

export const regularStyle = {
  ...headerStyle400,
  font: Fonts.Inter_400,
};