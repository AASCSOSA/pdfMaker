import { Content } from "pdfmake/interfaces";
import { RenderableComponent } from "./interfaces/renderable-component.interface";
import { defaultTheme, PdfTheme } from "../styles/theme.interface";

export class SectionComponent implements RenderableComponent {
  private xSection = 0;
  private ySection = 0;
  private xText = 0;
  private yText = 0;
  private w = 0;
  private textColor = 'black';
  private positionColor: string = '';
  private bold = false;
  private height = 26;

  constructor(
    private title: string,
    private theme: PdfTheme = defaultTheme
  ) {
  }

  setWidth(w: number): SectionComponent {
    this.w = w;
    return this
  }

  setTextColor(color: string): SectionComponent {
    this.textColor = color;
    return this
  }

  setSectionColor(color: string): SectionComponent {
    this.positionColor = color;
    return this
  }

  setAxisSectionPosition(x: number, y: number): SectionComponent {
    this.xSection = x;
    this.ySection = y;
    return this
  }

  setAxisTextPosition(x: number, y: number): SectionComponent {
    this.xText = x;
    this.yText = y;
    return this
  }

  setTextBold(): SectionComponent {
    this.bold = true;
    return this
  }

  render(): Content[] {
    return [
      {
        canvas: [
          {
            type: 'rect',
            x: this.xSection,
            y: this.ySection,
            w: this.w,
            h: this.height,
            color: this.positionColor === '' ? this.theme.colors.primary : this.positionColor,
          }
        ],
      },
      {
        text: this.title,
        style: 'sectionHeader',
        alignment: 'center',
        color: this.textColor,
        bold: this.bold,
        relativePosition: {x: this.xText, y: this.yText},
      },
    ];
  }

  setHeight(h: number): SectionComponent {
    this.height = h;
    return this
  }
}
