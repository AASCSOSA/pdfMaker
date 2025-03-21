import { RenderableComponent } from '../../shared/interfaces/renderable-component.interface';
import { Content } from 'pdfmake/interfaces';
import { Colors, Fonts, Logos } from '../../styles/styles';
import {
  AccountLabel1,
  AccountLabel2,
  AccountValue1,
  AccountValue2, ClabeLabel1, ClabeLabel2,
  ClabeValue1,
  ClabeValue2,
  Companyname,
  ExpirationDateLabel,
  ExpirationDateValue,
  LegalName,
  LogoAlly,
  LogoBbva,
  LogoSatander,
  Order,
  OrderStatus,
  QuotationDateLabel,
  QuotationDateValue,
  QuotationFolioLabel,
  QuotationFolioValue,
  RFCLabel,
  RFCValue,
} from './order-header.style';

export class OrderHeaderComponent implements RenderableComponent {
  constructor(
    private logoUrl?: string,
    private companyName?: string,
  ) {}

  render(): Content | Content[] {
    return [
      {
        canvas: [
          {
            type: 'rect',
            x: -40,
            y: -40,
            w: 595,
            h: 245,
            color: Colors.BLUE_RIBBON,
          },
        ],
      },
      LogoAlly,
      {
        table: {
          widths: [70, 290, 105, 75],
          body: [
            [LegalName, Companyname, OrderStatus, Order],
            [RFCLabel, RFCValue, QuotationDateLabel, QuotationDateValue],
            ['', '', QuotationFolioLabel, QuotationFolioValue],
            ['', '', ExpirationDateLabel, ExpirationDateValue],
          ],
        },
        layout: 'noBorders',
        absolutePosition: { x: 30, y: 110 },
        style: { fontSize: 10, color: Colors.WHITE },
      },
      {
        table: {
          widths: [45, 130, 40, '*'],
          body: [
            [LogoBbva, '', LogoSatander, ''],
            [AccountLabel1, AccountValue1, AccountLabel2, AccountValue2],
            [ClabeLabel1, ClabeValue1, ClabeLabel2, ClabeValue2],
          ],
        },
        layout: 'noBorders',
        absolutePosition: { x: 30, y: 170 },
        style: { fontSize: 10, color: Colors.WHITE, marginTop: 20 },
      },
    ];
  }
}
