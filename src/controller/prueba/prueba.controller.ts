import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ReportService } from '../report/report.service';

@Controller('reports')
export class PruebaController {
  constructor(private readonly reportsService: ReportService) {}
  @Get('report1')
  async getReport(@Res() response: Response) {
    const pdfDoc = await this.reportsService.getReport();
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Prueba';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
