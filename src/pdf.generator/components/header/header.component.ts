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
              'Razón social',
              'CHASE FARMACEUTICAL GROUP S.A DE C.V',
              'Estatus de Pedido',
              { text: 'Orden' },
            ],
            ['RFC', 'CFG181003SI1', 'Fecha de cotización', '17-03-2023'],
            ['', '', 'Folio de cotización', '17032023P12'],
            ['', '', 'Válido hasta', '24-03-2023'],
          ],
        },
        layout: 'noBorders',
        absolutePosition: { x: 30, y: 110 },
        font: Fonts.InterNormal,
        style: { fontSize: 10, color: Colors.WHITE },
      },
      {
        table: {
          widths: [45, 130, 40, '*'],
          body: [
            [
              {
                image: 'assets/img/logo-BBVA.png',
                width: 62,
                height: 16,
                margin: [0, 0, 0, 5],
              },
              '',
              {
                image: 'assets/img/logo-santander.png',
                width: 83,
                height: 16,
                margin: [0, 0, 0, 5],
              },
              '',
            ],
            ['Cuenta', '65-50720658-9', 'Cuenta', '0117772076'],
            ['CLABE', '014580655072065895', 'CLABE', '012580001177720762'],
          ],
        },
        layout: 'noBorders',
        absolutePosition: { x: 30, y: 170 },
        style: { fontSize: 10, color: Colors.WHITE, marginTop: 20 },
      },
    ];
  }
}
