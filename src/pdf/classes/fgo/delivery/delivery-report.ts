import { DocumentTemplate } from '../../document.template';
import { Content, StyleDictionary, StyleReference } from 'pdfmake/interfaces';
import { node } from 'globals';

export class DeliveryReport extends DocumentTemplate {
  private date: Date = new Date();
  private deliveryId: string;
  private delivery: any;
  private deliveryItems: any;

  constructor(deliveryId?: string) {
    super();
    this.setFileName(`delivery-report-${deliveryId}.pdf`);
  }

  setFileName(fileName: string) {
    super.setFileName(fileName);
  }

  // Encabezado azul

  protected createBody(): Content[] {
    return [
      {
        canvas: [
          {
            type: 'rect',
            x: 0,
            y: 0,
            w: 515.1,
            h: 26,
            color: '#13277A',
          },
        ],
        relativePosition: { x: 0, y: 30 },
      },
      // Texto del encabezado
      {
        text: 'Desglose de Precio',
        style: 'sectionHeader',
        alignment: 'center',
        bold: true,
        color: 'white',
        relativePosition: { x: 0, y: 35 },
      },
      {
        table: {
          widths: ['*', 'auto'],
          heights: function (row) {
            return 36; // Altura exacta de 26 puntos para cada fila
          },
          dontBreakRows: true,
          keepWithHeaderRows: 1,
          body: [
            [
              {
                text: 'Concepto',
                style: 'boldText',
                fontSize: 10,
                fillColor: '#E6F7F7',
                height: 36,
                color: '#111118',
                margin: [10, 11, 0, 0],
                font: 'Roboto',
              },
              {
                text: 'Precio',
                alignment: 'right',
                style: 'boldText',
                margin: [0, 11, 10, 0],
                fillColor: '#E6F7F7',
                height: 36,
                fontSize: 10,
                color: '#111118',
              },
            ],
            ...this.generateTableRows(),
          ],
        },
        layout: {
          hLineWidth: (i: number) => (i === 0 || i === 5 ? 1 : 1),
          vLineWidth: (i: number) => {
            if (i === 0) {
              return 1;
            }
            if (i == 2) {
              return 1;
            } else {
              return 0;
            }
          },
          vLineColor: () => '#EBF2FE',
          hLineColor: () => '#EBF2FE',
          paddingTop: () => 0,
          paddingBottom: () => 0,
        },
        relativePosition: { x: 0, y: 56 },
      },

    ];
  }

  private generateProductRows(): any[] {
    // Aquí puedes generar las filas de productos dinámicamente
    // Ejemplo de datos de productos
    const products = [
      {
        description: 'Producto 1',
        unitPrice: 10.0,
        quantity: 2,
        subtotal: 20.0,
        iva: 3.2,
        total: 23.2,
      },
      {
        description: 'Producto 2',
        unitPrice: 15.0,
        quantity: 1,
        subtotal: 15.0,
        iva: 2.4,
        total: 17.4,
      },
      {
        description: 'Producto 2',
        unitPrice: 15.0,
        quantity: 1,
        subtotal: 15.0,
        iva: 2.4,
        total: 17.4,
      },
      {
        description: 'Producto 2',
        unitPrice: 15.0,
        quantity: 1,
        subtotal: 15.0,
        iva: 2.4,
        total: 17.4,
      },
      // Agrega más productos según sea necesario
    ];

    return products.map((product) => [
      {
        text: product.description,
        margin: [10, 15, 0, 0],
        fontSize: 10,
        alignment: 'left',
      },
      {
        text: `$ ${product.unitPrice.toFixed(2)}`,
        alignment: 'center',
        margin: [0, 15, 0, 0],
        style: { fontSize: 10 },
      },
      {
        text: product.quantity.toString(),
        alignment: 'center',
        margin: [0, 15, 0, 0],
        style: { fontSize: 10 },
      },
      {
        text: `$ ${product.subtotal.toFixed(2)}`,
        alignment: 'center',
        margin: [0, 15, 0, 0],
        style: { fontSize: 10 },
      },
      {
        text: `$ ${product.iva.toFixed(2)}`,
        alignment: 'center',
        margin: [0, 15, 0, 0],
        style: { fontSize: 10 },
      },
      {
        text: `$ ${product.total.toFixed(2)}`,
        alignment: 'center',
        margin: [0, 15, 0, 0],
        style: { fontSize: 10 },
      },
    ]);
  }
  private generateTableRows(): any[] {
    return [
      [
        { text: 'Subtotal', margin: [10, 8, 0, 0], style: { fontSize: 10 } },
        {
          text: '$ 363.62',
          alignment: 'right',
          margin: [0, 8, 10, 0],
          style: { fontSize: 10 },
        },
      ],
      [
        { text: 'Envío', margin: [10, 8, 0, 0], style: { fontSize: 10 } },
        {
          text: '$ 100.00',
          alignment: 'right',
          margin: [0, 8, 10, 0],
          style: { fontSize: 10 },
        },
      ],
      [
        { text: 'IVA', margin: [10, 8, 0, 0], style: { fontSize: 10 } },
        {
          text: '$ 41.38',
          alignment: 'right',
          margin: [0, 8, 10, 0],
          style: { fontSize: 10 },
        },
      ],
      [
        {
          text: 'Total',
          margin: [10, 8, 0, 0],
          style: { bold: true, fontSize: 10 },
        },
        {
          text: '$ 405.00',
          alignment: 'right',
          margin: [0, 8, 10, 0],
          style: { bold: true, fontSize: 10 },
          border: [true, true, true, true], // Elimina borde izquierdo
        },
      ],
    ];
  }
  protected createFooter(): Content {
    return [
      {
        canvas: [
          {
            type: 'rect',
            x: 0,
            y: 0,
            w: 595,
            h: 305,
            r: 1,
            color: '#F9F9FB', //'#F9F9FB'
          },
        ],
        absolutePosition: { x: 0, y: 535 },
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
            bold: true,
          },
          {
            text: 'Dirección',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
            bold: true,
          },
          {
            text: 'Comentarios adicionales',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
            bold: true,
          },
          {
            text: 'Forma de pago',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
            bold: true,
          },
          {
            text: 'Fecha de entrega',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
            bold: true,
          },
        ],
        absolutePosition: { x: 25, y: 540 },
      },
      {
        ul: [
          {
            text: 'Cristopher Encisoo',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
          },
          {
            text: 'Jose Treviño 275 - Celebra, Monterrey, Nuevo León, 77880.',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
          },
          {
            text: 'Opcional',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
          },
          {
            text: 'Pago Online',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
          },
          {
            text: '24-03-2024',
            listType: 'none',
            margin: [0, 0, 0, 5],
            color: '#818181',
            fontSize: 10,
          },
        ],
        absolutePosition: { x: 150, y: 540 },
      },
      {
        text: 'Términos y Condiciones',
        bold: true,
        fontSize: 10,
        color: '#818181',
        absolutePosition: { x: 40, y: 638 },
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
        absolutePosition: { x: 40, y: 655 },
        fontSize: 10,
        color: '#818181',
      },
      {
        ul: [
          {
            text: 'Dirección',
            listType: 'none',
            margin: [0, 0, 0, 4],
            color: '#818181',
            fontSize: 10,
            bold: true,
          },
          {
            text: 'Teléfono',
            listType: 'none',
            margin: [0, 0, 0, 4],
            color: '#818181',
            fontSize: 10,
            bold: true,
          },
          {
            text: 'Correo',
            listType: 'none',
            margin: [0, 0, 0, 4],
            color: '#818181',
            fontSize: 10,
            bold: true,
          },
          {
            text: 'Sitio web',
            listType: 'none',
            margin: [0, 0, 0, 4],
            color: '#818181',
            fontSize: 10,
            bold: true,
          },
        ],
        absolutePosition: { x: 25, y: 738 },
      },
      {
        ul: [
          {
            text: 'José Treviño 275, Chepevera, 64030 Monterrey, N.L.',
            listType: 'none',
            margin: [0, 0, 0, 4],
            color: '#818181',
            fontSize: 10,
          },
          {
            text: '(81) 1297-5125; (81) 1936-9060',
            listType: 'none',
            margin: [0, 0, 0, 4],
            color: '#818181',
            fontSize: 10,
          },
          {
            text: 'contacto@fgo.mx',
            listType: 'none',
            margin: [0, 0, 0, 4],
            color: '#818181',
            fontSize: 10,
          },
          {
            text: 'www.fgo.mx',
            listType: 'none',
            margin: [0, 0, 0, 4],
            color: '#818181',
            fontSize: 10,
          },
        ],
        absolutePosition: { x: 80, y: 738 },
      },
      {
        text: '',
        pageBreak: 'after',
      },
      {
        stack: [
          {
            canvas: [
              {
                type: 'rect',
                x: -40, // Margen izquierdo
                y: -40, // Margen superior
                w: 595, // Ancho completo - márgenes
                h: 26,
                color: '#13277A',
              },
            ],
          },
          {
            text: 'Desglose de Productos',
            style: 'sectionHeader',
            fontSize: 15,
            absolutePosition: { x: 22, y: 2 }, // Ajuste fino de posición
          },
        ],
      },
      {
        table: {
          widths: [230, 70, 25, 80, 60, 80], // Anchos fijos para columnas
          heights: function (row) {
            return 46; // Altura exacta de 26 puntos para cada fila
          },
          body: [
            [
              {
                text: 'Descripción',
                style: 'headerCell',
                bold: true,
                margin: [10, 15, 0, 0],
              },
              {
                text: 'Precio Unitario',
                style: 'headerCell',
                alignment: 'center',
                bold: true,
                margin: [0, 15, 0, 0],
              },
              {
                text: 'Cant.',
                style: 'headerCell',
                alignment: 'center',
                bold: true,
                margin: [0, 15, 0, 0],
              },
              {
                text: 'Subtotal',
                style: 'headerCell',
                alignment: 'center',
                bold: true,
                margin: [0, 15, 0, 0],
              },
              {
                text: 'IVA',
                style: 'headerCell',
                alignment: 'center',
                bold: true,
                margin: [0, 15, 0, 0],
              },
              {
                text: 'Total',
                style: 'headerCell',
                alignment: 'center',
                bold: true,
                margin: [0, 15, 10, 0],
              },
            ],
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            ...this.generateProductRows(),
          ],
          headerRows: 1,
          dontBreakRows: true,
          keepWithHeaderRows: 1,
        },
        layout: {
          hLineWidth: () => 1,
          vLineWidth: () => 1,
          hLineColor: () => '#EBF2FE',
          vLineColor: () => '#EBF2FE',
          paddingTop: () => 5,
          paddingBottom: () => 5,
        },
        relativePosition: { x: -40, y: -14 },
      },
    ];
  }

  protected createHeader(): Content[] {
    return [
      {
        canvas: [
          {
            type: 'rect',
            x: -40,
            y: -40,
            w: 595,
            h: 245,
            color: '#026EFA',
          },
        ],
      },
      {
        image: 'assets/img/logo-ally.png',
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
              { text: 'Orden', bold: true },
            ],
            ['RFC', 'CFG181003SI1', 'Fecha de cotización', '17-03-2023'],
            ['', '', 'Folio de cotización', '17032023P12'],
            ['', '', 'Válido hasta', '24-03-2023'],
          ],
        },
        layout: 'noBorders',
        absolutePosition: { x: 30, y: 110 },
        style: { fontSize: 10, color: '#FFFFFF' },
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
        style: { fontSize: 10, color: '#FFFFFF', marginTop: 20 },
      },
    ];
  }

  protected getStyles(): StyleDictionary {
    return {
      header: {
        fontSize: 22,
        bold: true,
      },
      sectionHeader: {
        fontSize: 12,
        color: '#ffffff',
        alignment: 'center',
        bold: true,
      },
      boldText: {
        bold: true,
      },
      tableRows: {
        fontSize: 12,
      },
      headerCell: {
        bold: true,
        fontSize: 10,
        fillColor: '#E6F7F7',
        color: '#111118',
      },
      productCell: {
        fontSize: 10,
        margin: [10, 6, 10, 6],
        color: '#111118',
      },
      tableCell: {
        fontSize: 10,
        margin: [10, 8, 10, 8],
      },
      totalCell: {
        fontSize: 10,
        bold: true,
        margin: [10, 8, 10, 8],
      },
    };
  }
}
