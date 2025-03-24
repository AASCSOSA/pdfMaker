import { Fonts } from '../../styles/fonts';
import { Colors } from '../../styles/colors';
import { Logos } from '../../styles/images';

const baseTextStyle = {
  fontSize: 12,
  color: Colors.White,
};

const basePosition = (x: number, y: number) => ({
  absolutePosition: { x, y },
});

export const FarmaGoLogo = {
  image: Logos.FARMAGO,
  ...basePosition(14, 18),
  width: 67,
  height: 57,
};

export const FarmaGoAddress = {
  text: 'José Treviño #275, Col. Chepevera, Monterrey, Nuevo León, C.P. 64030',
  style: {
    font: Fonts.InterSemiBold,
    ...baseTextStyle,
  },
  ...basePosition(113, 36),
};

export const TextClient = {
  text: 'Cliente',
  style: {
    font: Fonts.InterMedium,
    ...baseTextStyle,
  },
  ...basePosition(15, 98),
};

export const TextClientAddress = {
  text: 'Dirección',
  style: {
    font: Fonts.InterMedium,
    ...baseTextStyle,
  },
  ...basePosition(15, 119),
};

export const TextDate = {
  text: 'Fecha',
  style: {
    font: Fonts.InterMedium,
    ...baseTextStyle,
  },
  ...basePosition(15, 140),
};

export const costumersName = (name: string) => ({
  text: name,
  style: { ...baseTextStyle },
  ...basePosition(105, 98),
});

export const clientAddress = (address: string) => ({
  text: address,
  style: { ...baseTextStyle },
  ...basePosition(105, 119),
});

export const saleDate = (saleDate: string) => ({
  text: saleDate,
  style: { ...baseTextStyle },
  ...basePosition(105, 140),
});

export const BackGroundConfig = {
  color: Colors.ToreaBay,
  width: 595,
  height: 170,
  position: { x: 0, y: 0 },
};
