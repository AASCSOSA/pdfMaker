import { RenderableComponent } from "../../shared/interfaces/renderable-component.interface";
import { Content } from "pdfmake/interfaces";

export interface BackgroundConfigurations {
  color: string;
  position: { x: number; y: number };
  height: number;
  width: number;
}

export class BackgroundComponent implements RenderableComponent {
  private configurations: BackgroundConfigurations;

  constructor(configu: BackgroundConfigurations) {
    this.configurations = configu;
  }

  render(): Content[] {
    return [
      {
        canvas: [
          {
            type: 'rect',
            x: 0,
            y: 0,
            w: this.configurations.width,
            h: this.configurations.height,
            color: this.configurations.color
          },
        ],
        absolutePosition: {x: this.configurations.position.x, y: this.configurations.position.y},
      },
    ];
  }
}
