import { Injectable } from '@nestjs/common';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import PdfPrinter from 'pdfmake';
import { TDocumentDefinitions, TFontDictionary } from 'pdfmake/interfaces';
import { Fonts } from '../../../styles/styles';
import path from 'path';

@Injectable()
export class PdfService {
  constructor() {
    pdfMake.vfs = pdfFonts.vfs;
  }

  fonts: TFontDictionary = {
    [Fonts.InterRegular]: {
      normal: path.resolve('assets/fonts/Inter_400.ttf'),
    },
    [Fonts.InterMedium]: {
      normal: path.resolve('assets/fonts/Inter_500.ttf'),
    },
    [Fonts.InterSemiBold]: {
      normal: path.resolve('assets/fonts/Inter_600.ttf'),
    },
    [Fonts.InterBold]: {
      normal: path.resolve('assets/fonts/Inter_700.ttf'),
    },
    [Fonts.RobotoRegular]: {
      normal: path.resolve('assets/fonts/Roboto_400.ttf'),
    },
    [Fonts.RobotoMedium]: {
      normal: path.resolve('assets/fonts/Roboto_500.ttf'),
    },
    [Fonts.RobotoSemiBold]: {
      normal: path.resolve('assets/fonts/Roboto_600.ttf'),
    },
    [Fonts.RobotoBold]: {
      normal: path.resolve('assets/fonts/Roboto_700.ttf'),
    },

    [Fonts.RobotoExtraBold]: {
      normal: path.resolve('assets/fonts/Roboto_900.ttf'),
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
