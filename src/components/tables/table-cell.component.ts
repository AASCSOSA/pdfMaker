import { TableCell, TableCellProperties } from 'pdfmake/interfaces';
import { Fonts } from "../../styles/fonts";

interface ExtendedTableCellProperties extends TableCellProperties {
  text: string;
  alignment?: 'left' | 'center' | 'right';
  fillColor?: string;
  margin?: [number, number, number, number];
  border?: [boolean, boolean, boolean, boolean];
  font?: string;
  fontSize?: number;
}

export class TableCellComponent {
  private cellConfig: TableCell & ExtendedTableCellProperties;

  constructor(
    private text: string,
    private styles: Partial<ExtendedTableCellProperties> = {
      font: Fonts.InterSemiBold,
    },
  ) {
    this.cellConfig = {
      text: this.text,
      ...this.styles,
    };
  }

  setAlignment(alignment: 'left' | 'center' | 'right'): this {
    this.cellConfig.alignment = alignment;
    return this;
  }

  setActivateBorder(
    left: boolean = false,
    top: boolean = false,
    right: boolean = false,
    bottom: boolean = false,
  ): this {
    this.cellConfig.border = [left, top, right, bottom];
    return this;
  }

  setFillColor(color: string): this {
    this.cellConfig.fillColor = color;
    return this;
  }

  //izquierda, arriba, derecha, abajo
  setMargin(marginArray: [number, number, number, number]): this {
    if (!this.cellConfig.margin) {
      this.cellConfig.margin = [0, 0, 0, 0];
    }
    this.cellConfig.margin = marginArray; // Aplica el margen solo al texto
    return this;
  }

  render(): any {
    return this.cellConfig;
  }
}
