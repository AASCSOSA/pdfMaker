import { ContentTable, Size } from 'pdfmake/interfaces';
import { TableCellComponent } from './table-cell.component';
import { RenderableComponent } from '../interfaces/renderable-component.interface';
import { Colors, Fonts } from '../../../styles/styles';

export class TableComponent implements RenderableComponent {
  private x = 0;
  private y = 0;
  private widths: '*' | 'auto' | Size[] = '*';
  private data: (any[] | { [key: string]: any })[] = [];
  private headers: (string | TableCellComponent)[] = [];
  private rowHeights: number | ((rowIndex: number) => number) = 46;
  setHeaders(headers: (string | TableCellComponent)[]): TableComponent {
    this.headers = headers;
    return this;
  }

  setData(data: (any[] | { [key: string]: any })[]): TableComponent {
    this.data = data;
    return this;
  }

  setWidths(widths: any[]): TableComponent {
    this.widths = widths;
    return this;
  }
  setRowHeights(
    heights: number | ((rowIndex: number) => number),
  ): TableComponent {
    this.rowHeights = heights;
    return this;
  }
  setPosition(x: number, y: number): TableComponent {
    this.x = x;
    this.y = y;
    return this;
  }

  render(): ContentTable {
    return {
      table: {
        widths: this.widths,
        headerRows: 1,
        heights: this.rowHeights, // Aquí aplicamos la altura
        body: [
          // Procesando encabezados
          this.headers.map((header) => {
            if (header instanceof TableCellComponent) {
              return header.render();
            } else {
              return {
                text: header,
              };
            }
          }),
          // Procesando filas de datos
          ...this.data.map((row) => {
            if (Array.isArray(row)) {
              // Si es un array, simplemente procesamos cada celda
              return row.map((cell) =>
                cell instanceof TableCellComponent ? cell.render() : cell,
              );
            } else {
              // Si es un objeto con propiedades
              return this.headers.map((header, index) => {
                // Obtenemos el nombre de la propiedad a partir del encabezado
                const headerText =
                  typeof header === 'string' ? header : header.render().text;

                const headerKey = headerText.toLowerCase();
                const cellValue = row[headerKey];

                return {
                  text: cellValue || '',
                };
              });
            }
          }),
        ],
      },
      layout: {
        hLineWidth: function (i, node) {
          // i=0 es el borde superior de la primera fila (encabezado)
          // i=1 es el borde inferior de la primera fila (encabezado)
          // i=node.table.body.length es el borde inferior de la última fila

          // Mostrar bordes para encabezado y final de la última fila
          if (i === 0 || i === 1 || i === node.table.body.length) {
            return 1;
          }
          return 1; // Ocultar todos los demás bordes horizontales
        },
        vLineWidth: function (i, node) {
          if (i === 1 || i === node.table.body.length) {
            return 0;
          }
          return 1; // Mostrar los demás bordes verticales
        },
        hLineColor: function () {
          return Colors.HAWKES_BLUE;
        },
        vLineColor: function () {
          return Colors.HAWKES_BLUE;
        },
      },
      relativePosition: { x: this.x, y: this.y },
    };
  }
}
