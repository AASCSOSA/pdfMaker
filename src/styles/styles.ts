import * as fs from "node:fs";

export enum Colors {
  VENICE_BLUE = '#08669B',
  WHITE = '#FFFFFF',
  TOREA_BAY = '#0C2788',
  FOAM = '#DDFCF9',
  BLUE_RIBBON = '#006EFF',
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

function getSvgAsBase64(filePath: string): string {
  const svg = fs.readFileSync(filePath, 'utf8');
  const base64Data = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64Data}`;
}

export enum LogoKeys {
  ALLY = 'ALLY',
  FGO = 'FGO',
  GO = 'GO'
}

export const Logos: Record<LogoKeys, string> = {
  [LogoKeys.ALLY]: 'assets/img/logo-ally.png',
  [LogoKeys.FGO]: 'assets/img/logo-fgo.png',
  [LogoKeys.GO]: 'assets/img/go.png'
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
}

export enum PageSizes {
  A4 = 'A4',
  LETTER = 'LETTER'
}