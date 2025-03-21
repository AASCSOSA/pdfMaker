import { RenderableComponent } from '../../shared/interfaces/renderable-component.interface';
import { Content } from 'pdfmake/interfaces';
import { Logos } from '../../styles/styles';
import {
  TextClient,
  costumersName,
  FarmaGoAddress,
  TextClientAddress,
  TextDate,
  saleDate,
  clientAddress,
} from './sale-header.styles';

export class SaleHeaderTemplate implements RenderableComponent {
  constructor(private saleData: any) {}
  render(): Content {
    return [
      {
        image: Logos.FARMA_GO,
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
      // costumersName(this.saleData.costumersname),
    ];
  }
}
