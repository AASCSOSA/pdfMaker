import { RenderableComponent } from '../../shared/interfaces/renderable-component.interface';
import { Content } from 'pdfmake/interfaces';
import { regular, bold, TextClient, costumersName } from './sale-header.styles';
import { Logos } from "../../styles/images";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";

export class SaleHeaderTemplate implements RenderableComponent {
  constructor(private saleData: any) {}
  render(): Content {
    return [
      {
        image: Logos.FARMAGO,
        absolutePosition: { x: 22, y: 13 },
        width: 84,
        height: 72,
      },
      {
        text: 'Cotización',
        style: { fontSize: 16, color: Colors.White, font: Fonts.InterRegular },
        relativePosition: { x: 460, y: -7 },
      },
      TextClient,
      costumersName(this.saleData.customersname),
      {
        text: 'Folio de Cotización',
        style: bold,
        absolutePosition: { x: 28, y: 132 },
      },
      {
        text: `${this.saleData.status}`,
        style: regular,
        absolutePosition: { x: 98, y: 132 },
      },
      {
        text: 'Folio de Cotización',
        style: bold,
        absolutePosition: { x: 378, y: 90 },
      },
      {
        text: 'Fecha de Cotización',
        style: bold,
        absolutePosition: { x: 378, y: 110 },
      },
      {
        text: 'Válida hasta',
        style: bold,
        absolutePosition: { x: 378, y: 130 },
      },
      {
        text: `${this.saleData.quotenumber}`,
        style: regular,
        relativePosition: { x: 470, y: 50 },
        characterSpacing: 0.5,
      },
      {
        text: `${this.saleData.quoteday}`,
        style: regular,
        relativePosition: { x: 470, y: 70 },
        characterSpacing: 0.5,
      },
      {
        text: `${this.saleData.quotevalidity}`,
        style: regular,

        relativePosition: { x: 470, y: 90 },
        characterSpacing: 0.5,
      },
    ];
  }
}
