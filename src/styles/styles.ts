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
  Athens_Gray = '#F9F9FB',
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
  LOGOBBVA = 'LOGOBBVA',
  LOGOSANTANDER = 'LOGOSANTANDER',
  FARMA_GO = 'FARMA_GO',
}

export const Logos: Record<LogoKeys, string> = {
  [LogoKeys.ALLY]: 'assets/img/logo-ally.png',
  [LogoKeys.FGO]: 'assets/img/logo-fgo.png',
  [LogoKeys.GO]: 'assets/img/go.png',
  [LogoKeys.LOGOBBVA]: 'assets/img/logo-BBVA.png',
  [LogoKeys.LOGOSANTANDER]: 'assets/img/logo-santander.png',
  [LogoKeys.FARMA_GO]: 'assets/img/FarmaGO.png',
};

export enum Fonts {
  InterBold = 'Inter700',
  InterSemiBold = 'Inter_600',
  InterMedium = 'Inter_500',
  InterRegular = 'Inter_400',

  RobotoBold = 'RobotoBold',
  RobotoSemiBold = 'RobotoSemiBold',
  RobotoMedium = 'RobotoMedium',
  RobotoRegular = 'RobotoRegular',
  RobotoExtraBold = 'RobotoExtraBold',
}

export enum PageSizes {
  A4 = 'A4',
  LETTER = 'LETTER',
}
export const defaultStyle = {
  font: Fonts.InterRegular,
  fontSize: 10,
};
