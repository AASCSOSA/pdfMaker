import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('generate')
  async generatePdf(@Res() res: Response) {
    try {
      const pdfBuffer = await this.pdfService.generatePdf();
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="document.pdf"',
      });
      res.send(pdfBuffer); // Enviar el PDF como respuesta
    } catch {
      res.status(500).send('Error al generar el PDF');
    }
  }
}
