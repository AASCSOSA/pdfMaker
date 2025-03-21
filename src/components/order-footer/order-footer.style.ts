import { Fonts } from '../../styles/styles';

const TextHeaderStyle = {
  margin: [0, 0, 0, 5] as [number, number, number, number],
  color: '#818181',
  listType: 'none' as const,
  font: Fonts.InterRegular,
  fontSize: 10,
};
const TextDataStyle = {
  listType: 'none' as const,
  margin: [0, 0, 0, 5] as [number, number, number, number],
  color: '#818181',
  fontSize: 10,
  font: Fonts.InterBold,
};
export const TitleClientName = {
  text: 'Client Name',
  ...TextHeaderStyle,
} as const;

export const TitleAddress = {
  text: 'Address',
  ...TextHeaderStyle,
} as const;

export const TitleOptional = {
  text: 'Optional',
  ...TextHeaderStyle,
} as const;

export const TitlePaymentMethod = {
  text: 'Payment Method',
  ...TextHeaderStyle,
} as const;

export const TitleDeliveryDate = {
  text: 'Delivery Date',
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
  absolutePosition: { x: 40, y: 658 },
};

const TextTermsAndConditionas: string[] = [
  'Payment must be settled before the delivery of products and medications.',
  'Once the product or medication is received, no changes or returns are allowed.',
  'For payments via bank transfer, the payment must be settled before receiving the products and medications.',
  'For controlled medications, a copy of the ID (both sides) and a medical prescription are required.',
  'The consumption of any product or medication is the responsibility of the person prescribing and consuming it.',
  'Due to internal policies, no changes or returns are accepted for controlled and refrigerated medications.',
];

export const ValueTermsAndCondition = TextTermsAndConditionas.map((text) => ({
  text,
  absolutePosition: { x: 40, y: 678 },
  fontSize: 10,
  color: '#818181',
  font: Fonts.InterRegular,
}));
export const TextCaptionStyle = {
  listType: 'none' as const,
  margin: [0, 0, 0, 3] as [number, number, number, number],
  color: '#818181',
  fontSize: 10,
  font: Fonts.InterBold,
};

export const ValueCaptionStyle = {
  listType: 'none' as const,
  margin: [0, 0, 0, 3] as [number, number, number, number],
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
