import { RenderableComponent } from '../../shared/interfaces/renderable-component.interface';
import { Content } from 'pdfmake/interfaces';
import { Colors, Fonts } from '../../styles/styles';
import {
  TermsAndConditions,
  TitleAddress,
  TitleAddressCaption,
  TitleClientName,
  TitleDeliveryDate,
  TitleEmailCaption,
  TitleOptional,
  TitlePaymentMethod,
  TitlePhoneCaption,
  TitleWebSiteCaption,
  ValueAddress,
  ValueAddressCaption,
  ValueClientName,
  ValueDeliveryDate,
  ValueEmailCaption,
  ValueOptional,
  ValuePaymentMethod,
  ValuePhoneCaption,
  ValueTermsAndCondition,
  ValueWebSiteCaption,
} from './order-footer.style';

export class OrderFooterComponent implements RenderableComponent {
  render(): Content | Content[] {
    return [
      {
        canvas: [
          {
            type: 'rect',
            x: 0,
            y: 0,
            w: 595,
            h: 295,
            r: 1,
            color: Colors.Athens_Gray, //'#F9F9FB'
          },
        ],
        absolutePosition: { x: 0, y: 547 },
      },
      {
        ul: [
          TitleClientName,
          TitleAddress,
          TitleOptional,
          TitlePaymentMethod,
          TitleDeliveryDate,
        ],
        absolutePosition: { x: 25, y: 545 },
      },
      {
        ul: [
          ValueClientName,
          ValueAddress,
          ValueOptional,
          ValuePaymentMethod,
          ValueDeliveryDate,
        ],
        absolutePosition: { x: 150, y: 545 },
      },
      TermsAndConditions,
      {
        ol: ValueTermsAndCondition,
      },
      {
        ul: [
          TitleAddressCaption,
          TitlePhoneCaption,
          TitleEmailCaption,
          TitleWebSiteCaption,
        ],
        relativePosition: { x: -15, y: 473 },
      },
      {
        ul: [
          ValueAddressCaption,
          ValuePhoneCaption,
          ValueEmailCaption,
          ValueWebSiteCaption,
        ],
        relativePosition: { x: 40, y: 473 },
      },
    ];
  }
}
