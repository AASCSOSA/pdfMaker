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
  FarmaGoLogo,
  BackGroundConfig,
} from './sale-header.styles';
import { BackgroundComponent } from '../background/background.component';

export class SaleHeaderTemplate implements RenderableComponent {
  constructor(private saleData: any) {}
  backgroundComponent = new BackgroundComponent(BackGroundConfig);
  render(): Content[] {
    return [
      this.backgroundComponent.render(),
      FarmaGoLogo,
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
