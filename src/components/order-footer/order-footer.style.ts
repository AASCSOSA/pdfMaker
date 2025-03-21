import { Fonts } from '../../styles/styles';

const TextHeaderStyle = {
  margin: [0, 0, 0, 5] as [number, number, number, number],
  color: '#818181',
  listType: 'none' as const,
  font: Fonts.InterBold,

  fontSize: 10,
};
const TextDataStyle = {
  listType: 'none' as const,
  margin: [0, 0, 0, 5] as [number, number, number, number],
  color: '#818181',
  fontSize: 10,
  font: Fonts.InterRegular,
};
export const TitleClientName = {
  text: 'Nombre del cliente',
  ...TextHeaderStyle,
} as const;

export const TitleAddress = {
  text: 'Dirección',
  ...TextHeaderStyle,
} as const;

export const TitleOptional = {
  text: 'Comentarios adicionales',
  ...TextHeaderStyle,
} as const;

export const TitlePaymentMethod = {
  text: 'Forma de pago',
  ...TextHeaderStyle,
} as const;

export const TitleDeliveryDate = {
  text: 'Fecha de entrega',
  ...TextHeaderStyle,
} as const;

export const ValueClientName = {
  text: 'Cristopher Encisoo',
  ...TextDataStyle,
} as const;

export const ValueAddress = {
  text: 'Jose Treviño 275 - Celebra, Monterrey, Nuevo León, 77880.',
  ...TextDataStyle,
} as const;

export const ValueOptional = {
  text: 'Opcional',
  ...TextDataStyle,
} as const;

export const ValuePaymentMethod = {
  text: 'Pago Online',
  ...TextDataStyle,
} as const;

export const ValueDeliveryDate = {
  text: '24-03-2024',
  ...TextDataStyle,
} as const;
export const TermsAndConditions = {
  text: 'Términos y Condiciones',
  fontSize: 10,
  color: '#818181',
  font: Fonts.RobotoBold,
  absolutePosition: { x: 35, y: 643 },
};

export const ValueTermsAndCondition = {
  ol: [
    'El pago será liquidado antes de la entrega de losproductos y medicamentos',
    'Una vez recibido el producto o medicamento no hay cambios ni devoluciones.',
    'En pagos con transferencia es necesario liquidar antesde recibir los productos y medicamentos',
    'En medicamentos controlados es necesario entregarcopia de INE(ambos lados) y receta medica.',
    'El consumo de cualquier producto o medicamento es responsabilidad de quien lo receta y consume.',
    'Por políticas internas no se aceptan cambios ni devoluciones en medicamentos controlados y refrigerados.',
  ],
  absolutePosition: { x: 35, y: 663 },
  fontSize: 10,
  color: '#818181',
  font: Fonts.InterRegular,
  characterSpacing:0.3,

};

export const TextCaptionStyle = {
  listType: 'none' as const,
  margin: [0, 0, 0, 5] as [number, number, number, number],
  color: '#818181',
  fontSize: 10,
  font: Fonts.InterBold,
};

export const ValueCaptionStyle = {
  listType: 'none' as const,
  margin: [0, 0, 0, 5] as [number, number, number, number],
  color: '#818181',
  fontSize: 10,
  font: Fonts.InterRegular,
};
export const TitleAddressCaption = {
  text: 'Dirección',
  ...TextCaptionStyle,
};
export const TitlePhoneCaption = {
  text: 'Teléfono',
  ...TextCaptionStyle,
};
export const TitleEmailCaption = {
  text: 'Correo',
  ...TextCaptionStyle,
};
export const TitleWebSiteCaption = {
  text: 'Sitio web',
  ...TextCaptionStyle,
};
export const ValueAddressCaption = {
  text: 'José Treviño 275, Chepevera, 64030 Monterrey, N.L.',
  ...ValueCaptionStyle,
};
export const ValuePhoneCaption = {
  text: '(81) 1297-5125; (81) 1936-9060',
  ...ValueCaptionStyle,
};
export const ValueEmailCaption = {
  text: 'contacto@fgo.mx',
  ...ValueCaptionStyle,
};
export const ValueWebSiteCaption = {
  text: 'www.fgo.mx',
  ...ValueCaptionStyle,
};
