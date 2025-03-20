import { Injectable } from '@nestjs/common';
import PdfPrinter from "pdfmake";
import { TDocumentDefinitions, TFontDictionary } from "pdfmake/interfaces";
import { Fonts } from "../../../styles/styles";
import path from "path";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

@Injectable()
export class PdfPrinterService {
  private readonly printer: PdfPrinter;

  constructor() {
    pdfMake.vfs = pdfFonts.vfs;
    const fonts: TFontDictionary = {
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
    this.printer = new PdfPrinter(fonts);
  };

  createPdfKitDocument(docDefinition: TDocumentDefinitions) {
    return this.printer.createPdfKitDocument(docDefinition);
  }

  get printerInstance() {
    return this.printer;
  }

  get vfs() {
    return pdfMake.vfs;
  }

  get fonts() {
    return pdfMake.fonts;
  }

  set fonts(fonts) {
    pdfMake.fonts = fonts;
  }

  set vfs(vfs) {
    pdfMake.vfs = vfs;
  }
}
