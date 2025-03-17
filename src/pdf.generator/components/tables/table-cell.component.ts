import { Alignment, Content, StyleReference, TableCell, TableCellProperties } from "pdfmake/interfaces";

export class TableCellComponent {
  private cellConfig: any;

  constructor(
    private text: string,
    private styles: any = {}
  ) {
    this.cellConfig = {
      text: this.text,
      style: 'tableCell',
      ...this.styles
    };
  }

  setAlignment(alignment: 'left' | 'center' | 'right'): this {
    this.cellConfig.alignment = alignment;
    return this;
  }

  setActivateBorder(
    top: boolean = true,
    right: boolean = true,
    bottom: boolean = true,
    left: boolean = true,
  ): this {
    this.cellConfig.border = [top, right, bottom, left];
    return this;
  }

  setBold(isBold: boolean = true): this {
    this.cellConfig.bold = isBold;
    return this;
  }

  setFillColor(color: string): this {
    this.cellConfig.fillColor = color;
    return this;
  }
  //izquierda, arriba, derecha, abajo
  setMargin(marginArray: [number, number, number, number]): this {
    this.cellConfig.margin = marginArray;
    return this;
  }

  render(): any {
    return this.cellConfig;
  }
}

