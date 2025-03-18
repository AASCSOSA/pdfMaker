import { Injectable } from '@nestjs/common';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import PdfPrinter from 'pdfmake';
import { TDocumentDefinitions, TFontDictionary } from 'pdfmake/interfaces';
import { Fonts } from '../styles/styles';
import path from 'path';

@Injectable()
export class PdfService {
  constructor() {
    pdfMake.vfs = pdfFonts.vfs;
  }

  fonts: TFontDictionary = {
    [Fonts.InterNormal]: {
      normal: path.resolve('assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
      bold: path.resolve('assets/fonts/Inter_18pt-Bold.ttf'),
      italics: path.resolve(
        'assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf',
      ),
      bolditalics: path.resolve('assets/fonts/Inter_18pt-BoldItalic.ttf'),
    },
    [Fonts.Inter_400]: {
      normal: path.resolve('assets/fonts/Inter_400.ttf'),
    },
    [Fonts.Inter_500]: {
      normal: path.resolve('assets/fonts/Inter_500.ttf'),
    },
    [Fonts.Inter_600]: {
      normal: path.resolve('assets/fonts/Inter_600.ttf'),
    },
    [Fonts.Inter_700]: {
      normal: path.resolve('assets/fonts/Inter_700.ttf'),
    },
    [Fonts.Roboto_400]: {
      normal: path.resolve('assets/fonts/Roboto_400.ttf'),
    },
    [Fonts.Roboto_500]: {
      normal: path.resolve('assets/fonts/Roboto_500.ttf'),
    },
    [Fonts.Roboto_600]: {
      normal: path.resolve('assets/fonts/Roboto_600.ttf'),
    },
    [Fonts.Roboto_700]: {
      normal: path.resolve('assets/fonts/Roboto_700.ttf'),
    },

    [Fonts.InterBold]: {
      normal: path.resolve('assets/fonts/Inter_18pt-Bold.ttf'),
      bold: path.resolve('assets/fonts/Inter_18pt-Bold.ttf'),
      italics: path.resolve(
        'assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf',
      ),
      bolditalics: path.resolve('assets/fonts/Inter_18pt-BoldItalic.ttf'),
    },
    [Fonts.InterItalics]: {
      normal: path.resolve(
        'assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf',
      ),
      bold: path.resolve('assets/fonts/Inter_18pt-Bold.ttf'),
      italics: path.resolve(
        'assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf',
      ),
      bolditalics: path.resolve('assets/fonts/Inter_18pt-BoldItalic.ttf'),
    },
    [Fonts.InterBoldItalics]: {
      normal: path.resolve('assets/fonts/Inter_18pt-BoldItalic.ttf'),
      bold: path.resolve('assets/fonts/Inter_18pt-Bold.ttf'),
      italics: path.resolve(
        'assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf',
      ),
      bolditalics: path.resolve('assets/fonts/Inter_18pt-BoldItalic.ttf'),
    },
    [Fonts.RobotoNormal]: {
      normal: 'assets/fonts/Roboto-Regular.ttf',
      bold: path.resolve('assets/fonts/Roboto-Bold.ttf'),
      italics: path.resolve('assets/fonts/Roboto-Italic.ttf'),
      bolditalics: path.resolve('assets/fonts/Raleway-BoldItalic.ttf'),
    },
    [Fonts.RobotoBold]: {
      normal: path.resolve('assets/fonts/Roboto-Bold.ttf'),
      bold: path.resolve('assets/fonts/Roboto-Bold.ttf'),
      italics: path.resolve('assets/fonts/Roboto-Italic.ttf'),
      bolditalics: path.resolve('assets/fonts/Roboto-BoldItalic.ttf'),
    },
    [Fonts.RobotoItalics]: {
      normal: path.resolve('assets/fonts/Roboto-Italic.ttf'),
      bold: path.resolve('assets/fonts/Roboto-Bold.ttf'),
      italics: path.resolve('assets/fonts/Roboto-Italic.ttf'),
      bolditalics: path.resolve('assets/fonts/Roboto-BoldItalic.ttf'),
    },
    [Fonts.RobotoBoldItalics]: {
      normal: path.resolve('assets/fonts/Roboto-BoldItalic.ttf'),
      bold: path.resolve('assets/fonts/Roboto-Bold.ttf'),
      italics: path.resolve('assets/fonts/Roboto-Italic.ttf'),
      bolditalics: path.resolve('assets/fonts/Roboto-BoldItalic.ttf'),
    },
  };

  async generatePdf(docDefinition: TDocumentDefinitions): Promise<Buffer> {
    return new Promise((resolve) => {
      const printer = new PdfPrinter(this.fonts);
      const pdfDoc = printer.createPdfKitDocument(docDefinition);
      const chunks: Buffer[] = [];
      pdfDoc.on('data', (chunk) => {
        chunks.push(chunk);
      });

      pdfDoc.on('end', () => {
        const result = Buffer.concat(chunks);
        resolve(result);
      });

      pdfDoc.end();
    });
  }
}
