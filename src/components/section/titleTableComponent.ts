import { Content } from 'pdfmake/interfaces';
import { RenderableComponent } from '../../shared/interfaces/renderable-component.interface';
import { Layouts } from "../../styles/styles";
import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";

export interface TitleTableConfigurationRequired {
  title: string;
  sectionPosition: { x: number; y: number };
  textPosition: { x: number; y: number };
  height: number;
  weight: number;
}

export interface TitleTableConfigurationOptional {
  textFont?: string
  textColor?: string
  sectionColor?: string
  textAlignment?: Layouts;
  textFontSize?: number;
}

export type TitleTableOptionsComplete = TitleTableConfigurationRequired &
  TitleTableConfigurationOptional;

export class TitleTableComponent implements RenderableComponent {
  private options: TitleTableOptionsComplete;

  constructor(
    requiredOptions: TitleTableConfigurationRequired,
    optionalOptions: TitleTableConfigurationOptional = {},
  ) {
    this.options = {
      ...requiredOptions,
      textFont: optionalOptions.textFont || Fonts.InterBold,
      textColor: optionalOptions.textColor || Colors.White,
      sectionColor: optionalOptions.sectionColor || Colors.MidnightBlue,
      textAlignment: optionalOptions.textAlignment || Layouts.Center,
      textFontSize: optionalOptions.textFontSize || 15,
    };
  }

  setWidth(w: number): TitleTableComponent {
    this.options.weight = w;
    return this;
  }

  setTextColor(color: string): TitleTableComponent {
    this.options.textColor = color;
    return this;
  }

  setSectionColor(color: string): TitleTableComponent {
    this.options.sectionColor = color;
    return this;
  }

  setAxisSectionPosition(x: number, y: number): TitleTableComponent {
    this.options.sectionPosition = {x, y};
    return this;
  }

  setAxisTextPosition(x: number, y: number): TitleTableComponent {
    this.options.textPosition = {x, y};
    return this;
  }

  setHeight(h: number): TitleTableComponent {
    this.options.height = h;
    return this;
  }

  render(): Content[] {
    return [
      {
        canvas: [
          {
            type: 'rect',
            x: this.options.sectionPosition.x,
            y: this.options.sectionPosition.y,
            w: this.options.weight,
            h: this.options.height,
            color: this.options.sectionColor,
          },
        ],
      },
      {
        text: this.options.title,
        alignment: this.options.textAlignment,
        color: this.options.textColor,
        absolutePosition: {
          x: this.options.textPosition.x,
          y: this.options.textPosition.y,
        },
        font: this.options.textFont,
        fontSize: this.options.textFontSize,
      },
    ];
  }
}
