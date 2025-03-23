import { RenderableComponent } from '../../shared/interfaces/renderable-component.interface';
import { Content } from 'pdfmake/interfaces';
import {
  TextClient,
  costumersName,
  FarmaGoAddress,
  TextClientAddress,
  TextDate,
  saleDate,
  clientAddress,
} from './sale-header.styles';
import { Logos } from '../../styles/images';

export class SaleHeaderTemplate implements RenderableComponent {
  constructor(private saleData: any) {}
  render(): Content {
    return [
      {
        image: Logos.FARMAGO,
        absolutePosition: { x: 14, y: 18 },
        width: 67,
        height: 57,
      },
      FarmaGoAddress,
      TextClient,
      costumersName(this.saleData.costumersname),
      TextClientAddress,
      clientAddress(this.saleData.address),
      TextDate,
      saleDate(this.saleData.saledate),
    ];
  }
}
