import { ContentTable, Size } from 'pdfmake/interfaces';
import { TableCellComponent } from './table-cell.component';
import { RenderableComponent } from '../../shared/interfaces/renderable-component.interface';
import { Colors, Fonts } from '../../styles/styles';

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
          // Dibujar bordes horizontales en todas las filas (incluyendo encabezado)
          return 1; // Mostrar bordes horizontales en todas las filas
        },
        vLineWidth: function (i, node) {
          // Dibujar bordes verticales solo en la primera y última columna
          if (i === 0 || i === node.table.body[0].length) {
            return 1; // Mostrar la primera y última columna como bordes verticales
          }
          return 0; // No mostrar otras líneas verticales internas
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
