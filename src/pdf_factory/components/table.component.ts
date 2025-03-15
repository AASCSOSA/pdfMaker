import { ContentTable } from "pdfmake/interfaces";
import { TableCellComponent } from "./tables/table-cell.component";

export class TableComponent {
  private x = 0;
  private y = 0;
  private widths: any[] = [];
  private data: (any[] | { [key: string]: any })[] = [];
  private headers: (string | TableCellComponent)[] = [];
  private styles: any = {
    header: {},
    cell: {}
  };

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

  setStyles(styles: any): TableComponent {
    this.styles = styles;
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
        widths: this.widths.length ? this.widths : Array(this.headers.length).fill('*'),
        headerRows: 1,
        body: [
          // Procesando encabezados
          this.headers.map(header => {
            if (header instanceof TableCellComponent) {
              return header.render();
            } else {
              return {
                text: header,
                style: 'headerCell',
                ...this.styles.header
              };
            }
          }),

          // Procesando filas de datos
          ...this.data.map(row => {
            if (Array.isArray(row)) {
              // Si es un array, simplemente procesamos cada celda
              return row.map(cell =>
                cell instanceof TableCellComponent ? cell.render() : cell
              );
            } else {
              // Si es un objeto con propiedades
              return this.headers.map((header, index) => {
                // Obtenemos el nombre de la propiedad a partir del encabezado
                const headerText = typeof header === 'string'
                  ? header
                  : header.render().text;

                const headerKey = headerText.toLowerCase();
                const cellValue = row[headerKey];

                return {
                  text: cellValue || '',
                  style: 'tableCell',
                  ...this.styles.cell
                };
              });
            }
          })
        ]
      },
      layout: {
        hLineWidth: () => 1,
        vLineWidth: () => 1,
        hLineColor: () => '#EBF2FE',
        vLineColor: () => '#EBF2FE',
      },
      relativePosition: {x: this.x, y: this.y}
    };
  }
}