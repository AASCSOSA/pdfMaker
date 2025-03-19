import { RenderableComponent } from '../interfaces/renderable-component.interface';
import { Content } from 'pdfmake/interfaces';
import { Colors, Fonts, Logos } from '../../../styles/styles';

export class SaleHeaderComponent implements RenderableComponent {
  constructor(private saleData: any) {}
  render(): Content {
    const commonStyle = {
      fontSize: 10,
      color: Colors.WHITE,
    };

    const boldStyle = {
      ...commonStyle,
      font: Fonts.Inter_500,
    };

    const regularStyle = {
      ...commonStyle,
      font: Fonts.Inter_400,
    };

    const data = [
      {
        image: Logos.FARMA_GO,
        absolutePosition: { x: 22, y: 13 },
        width: 84,
        height: 72,
      },
      {
        text: 'Cotización',
        style: { fontSize: 16, color: Colors.WHITE, font: Fonts.Inter_400 },
        absolutePosition: { x: 480, y: 32 },
      },
      // Customer data:
      { text: 'Cliente', style: boldStyle, absolutePosition: { x: 28, y: 112 } },
      { text: 'Estatus', style: boldStyle, absolutePosition: { x: 28, y: 132 } },
      { text: `${this.saleData.customersname}`, style: regularStyle, absolutePosition: { x: 98, y: 112 } },
      { text: `${this.saleData.status}`, style: regularStyle, absolutePosition: { x: 98, y: 132 } },
      { text: 'Folio de Cotización', style: boldStyle, absolutePosition: { x: 370, y: 90 } },
      { text: 'Fecha de Cotización', style: boldStyle, absolutePosition: { x: 370, y: 110 } },
      { text: 'Válida hasta', style: boldStyle, absolutePosition: { x: 370, y: 130 } },
      { text: `${this.saleData.quotenumber}`, style: boldStyle, absolutePosition: { x: 485, y: 90 } },
      { text: `${this.saleData.quoteday}`, style: boldStyle, absolutePosition: { x: 485, y: 110 } },
      { text: `${this.saleData.quotevalidity}`, style: boldStyle, absolutePosition: { x: 485, y: 130 } },
    ];
    return data;
  }
}
