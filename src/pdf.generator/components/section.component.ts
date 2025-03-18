import { Content } from 'pdfmake/interfaces';
import { RenderableComponent } from './interfaces/renderable-component.interface';
import { Alignments, Colors, Fonts } from '../../styles/styles';

export interface SectionConfigurationRequired {
  title: string;
  sectionPosition: { x: number; y: number };
  textPosition: { x: number; y: number };
  height: number;
  weight: number;
}

export interface SectionConfigurationOptional {
  textFont?: Fonts;
  textColor?: Colors;
  sectionColor?: Colors;
  textAlignment?: Alignments;
  textFontSize?: number;
}

export type SectionOptionsComplete = SectionConfigurationRequired &
  SectionConfigurationOptional;

export class SectionComponent implements RenderableComponent {
  private options: SectionOptionsComplete;

  constructor(
    requiredOptions: SectionConfigurationRequired,
    optionalOptions: SectionConfigurationOptional = {},
  ) {
    this.options = {
      ...requiredOptions,
      textFont: optionalOptions.textFont || Fonts.Inter_500,
      textColor: optionalOptions.textColor || Colors.WHITE,
      sectionColor: optionalOptions.sectionColor || Colors.MIDNIGHT_BLUE,
      textAlignment: optionalOptions.textAlignment || Alignments.CENTER,
      textFontSize: optionalOptions.textFontSize || 15,
    };
  }

  setWidth(w: number): SectionComponent {
    this.options.weight = w;
    return this;
  }

  setTextColor(color: Colors): SectionComponent {
    this.options.textColor = color;
    return this;
  }

  setSectionColor(color: Colors): SectionComponent {
    this.options.sectionColor = color;
    return this;
  }

  setAxisSectionPosition(x: number, y: number): SectionComponent {
    this.options.sectionPosition = { x, y };
    return this;
  }

  setAxisTextPosition(x: number, y: number): SectionComponent {
    this.options.textPosition = { x, y };
    return this;
  }

  setHeight(h: number): SectionComponent {
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
