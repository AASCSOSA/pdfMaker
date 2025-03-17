export interface PdfTheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
    // Otros colores...
  };
  fonts: {
    // Definiciones de fuentes...
  };
  spacing: {
    small: number;
    medium: number;
    large: number;
  };
}

export const defaultTheme: PdfTheme = {
  colors: {
    primary: '#13277A',
    secondary: '#026EFA',
    background: '#FFFFFF',
    text: '#000000',
    accent: '#E6F7F7',
  },
  fonts: {
    regular: 'Arial',
    bold: 'Arial-Bold',
    italic: 'Arial-Italic',
    boldItalic: 'Arial-BoldItalic',
  },
  spacing: {
    small: 5,
    medium: 10,
    large: 20,
  }
};
