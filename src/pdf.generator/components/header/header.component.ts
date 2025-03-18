import { RenderableComponent } from '../interfaces/renderable-component.interface';
import { Content } from 'pdfmake/interfaces';
import { Colors, Fonts, Logos } from '../../../styles/styles';

export class HeaderComponent implements RenderableComponent {
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
      {
        image: Logos.ALLY,
        absolutePosition: { x: 30, y: 20 },
        width: 134,
        height: 68.29,
      },
      {
        table: {
          widths: [70, 290, 105, 75],
          body: [
            [
              { text: 'Razon social', font: Fonts.Inter_500 },
              {
                text: 'CHASE FARMACEUTICAL GROUP S.A. DE C.V.',
                font: Fonts.Inter_400,
              },
              { text: 'Estatus de pedido', font: Fonts.Inter_500 },
              { text: 'Orden', font: Fonts.Inter_700 },
            ],
            [
              { text: 'RFC', font: Fonts.Inter_500 },
              { text: 'CFG181003SI1', font: Fonts.Inter_400 },
              { text: 'Fecha de cotización', font: Fonts.Inter_500 },
              { text: '17-03-2023', font: Fonts.Inter_400 },
            ],
            [
              '',
              '',
              { text: 'Folio de cotización', font: Fonts.Inter_500 },
              { text: '17032023P12', font: Fonts.Inter_400 },
            ],
            [
              '',
              '',
              { text: 'Válido hasta', font: Fonts.Inter_500 },
              { text: '24-03-2023', font: Fonts.Inter_400 },
            ],
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
            [
              {
                image: Logos.LOGOBBVA,
                width: 62,
                height: 16,
                margin: [0, 0, 0, 5],
              },
              '',
              {
                image: Logos.LOGOSANTANDER,
                width: 83,
                height: 16,
                margin: [0, 0, 0, 5],
              },
              '',
            ],
            [
              { text: 'Cuenta', font: Fonts.Inter_500 },
              { text: '65-50720658-9', font: Fonts.Inter_400 },
              { text: 'Cuenta', font: Fonts.Inter_500 },
              { text: '0117772076', font: Fonts.Inter_400 },
            ],
            [
              { text: 'CLABE', font: Fonts.Inter_500 },
              { text: '014580655072065895', font: Fonts.Inter_400 },
              { text: 'CLABE', font: Fonts.Inter_500 },
              { text: '012580001177720762', font: Fonts.Inter_400 },
            ],
          ],
        },
        layout: 'noBorders',
        absolutePosition: { x: 30, y: 170 },
        style: { fontSize: 10, color: Colors.WHITE, marginTop: 20 },
      },
    ];
  }
}
