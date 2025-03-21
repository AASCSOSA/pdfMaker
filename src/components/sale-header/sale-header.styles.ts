import { Colors, Fonts } from '../../styles/styles';

// export const regular = {
//   fontSize: 10,
//   color: Colors.WHITE,
// };
//
// export const bold = {
//   ...regular,
//   font: Fonts.InterBold,
// };
export const FarmaGoLogo

export const FarmaGoAddress = {
  text: 'José Treviño #275, Col. Chepevera, Monterrey, Nuevo León, C.P. 64030',
  style: {
    font: Fonts.InterSemiBold,
    fontSize: 12,
    color: Colors.WHITE,
  },
  absolutePosition: {
    x: 101,
    y: 36,
  },
};

export const TextClient = {
  text: 'Cliente',
  style: {
    font: Fonts.InterMedium,
    fontSize: 12,
    color: Colors.WHITE,
  },
  absolutePosition: {
    x: 15,
    y: 98,
  },
};
export const TextClientAddress = {
  text: 'Direccion',
  style: {
    font: Fonts.InterMedium,
    fontSize: 12,
    color: Colors.WHITE,
  },
  absolutePosition: {
    x: 15,
    y: 119,
  },
};
export const TextDate = {
  text: 'Fecha',
  style: {
    font: Fonts.InterMedium,
    fontSize: 12,
    color: Colors.WHITE,
  },
  absolutePosition: {
    x: 15,
    y: 140,
  },
};

export const costumersName = (name: string) => ({
  text: name,
  style: {
    fontSize: 12,
    color: Colors.WHITE,
  },
  absolutePosition: {
    x: 90,
    y: 98,
  },
});
export const clientAddress = (address: string) => ({
  text: address,
  style: {
    fontSize: 12,
    color: Colors.WHITE,
  },
  absolutePosition: {
    x: 90,
    y: 119,
  },
});
export const saleDate = (saleDate: string) => ({
  text: saleDate,
  style: {
    fontSize: 12,
    color: Colors.WHITE,
  },
  absolutePosition: {
    x: 90,
    y: 140,
  },
});
