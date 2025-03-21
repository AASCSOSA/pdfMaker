import { RenderableComponent } from '../../shared/interfaces/renderable-component.interface';
import { Content } from 'pdfmake/interfaces';
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
import { Colors } from "../../styles/colors";

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
            h: 326,
            r: 1,
            color: Colors.Athens_Gray, //'#F9F9FB'
          },
        ],
        absolutePosition: { x: 0, y: 516 },
      },
      {
        ul: [
          TitleClientName,
          TitleAddress,
          TitleOptional,
          TitlePaymentMethod,
          TitleDeliveryDate,
        ],
        absolutePosition: { x: 25, y: 529 },
      },
      {
        ul: [
          ValueClientName,
          ValueAddress,
          ValueOptional,
          ValuePaymentMethod,
          ValueDeliveryDate,
        ],
        absolutePosition: { x: 160, y: 529 },
      },
      TermsAndConditions,
      ValueTermsAndCondition,
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
