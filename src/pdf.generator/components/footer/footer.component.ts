import { RenderableComponent } from '../interfaces/renderable-component.interface';
import { Content } from 'pdfmake/interfaces';
import { Colors, Fonts } from '../../../styles/styles';

export class FooterComponent implements RenderableComponent {
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
        //Customer data fields
        ul: [
          {
            text: 'Nombre del cliente',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_700,
          },
          {
            text: 'Dirección',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_700,
          },
          {
            text: 'Comentarios adicionales',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_700,
          },
          {
            text: 'Forma de pago',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_700,
          },
          {
            text: 'Fecha de entrega',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_700,
          },
        ],
        absolutePosition: { x: 25, y: 545 },
      },
      {
        ul: [
          {
            text: 'Cristopher Encisoo',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_400,
          },
          {
            text: 'Jose Treviño 275 - Celebra, Monterrey, Nuevo León, 77880.',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_400,
          },
          {
            text: 'Opcional',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_400,
          },
          {
            text: 'Pago Online',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_400,
          },
          {
            text: '24-03-2024',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_400,
          },
        ],
        absolutePosition: { x: 150, y: 545 },
      },
      {
        text: 'Términos y Condiciones',
        fontSize: 10,
        color: '#818181',
        font: Fonts.Roboto_700,
        absolutePosition: { x: 40, y: 658 },
      },
      {
        ol: [
          'El pago será liquidado antes de la entrega de losproductos y medicamentos.',
          'Una vez recibido el producto o medicamento no hay cambios ni devoluciones.',
          'En pagos con transferencia es necesario liquidar antesde recibir los productos y medicamentos.',
          'En medicamentos controlados es necesario entregarcopia de INE(ambos lados) y receta medica.',
          'El consumo de cualquier producto o medicamento es responsabilidad de quien lo receta y consume.',
          'Por políticas internas no se aceptan cambios ni devoluciones en medicamentos controlados y refrigerados.',
        ],
        absolutePosition: { x: 40, y: 678 },
        fontSize: 10,
        color: '#818181',
        font: Fonts.Inter_400,
      },
      {
        ul: [
          {
            text: 'Dirección',
            listType: 'none',
            margin: [0, 0, 0, 3],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_700,
          },
          {
            text: 'Teléfono',
            listType: 'none',
            margin: [0, 0, 0, 3],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_700,
          },
          {
            text: 'Correo',
            listType: 'none',
            margin: [0, 0, 0, 3],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_700,
          },
          {
            text: 'Sitio web',
            listType: 'none',
            margin: [0, 0, 0, 3],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_700,
          },
        ],
        relativePosition: { x: -15, y: 473 },
      },
      {
        ul: [
          {
            text: 'José Treviño 275, Chepevera, 64030 Monterrey, N.L.',
            listType: 'none',
            margin: [0, 0, 0, 3],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_400,
          },
          {
            text: '(81) 1297-5125; (81) 1936-9060',
            listType: 'none',
            margin: [0, 0, 0, 3],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_400,
          },
          {
            text: 'contacto@fgo.mx',
            listType: 'none',
            margin: [0, 0, 0, 3],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_400,
          },
          {
            text: 'www.fgo.mx',
            listType: 'none',
            margin: [0, 0, 0, 3],
            color: '#818181',
            fontSize: 10,
            font: Fonts.Inter_400,
          },
        ],
        relativePosition: { x: 40, y: 473 },
      },
    ];
  }
}
