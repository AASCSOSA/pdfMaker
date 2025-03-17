import { RenderableComponent } from "./interfaces/renderable-component.interface";
import { Content } from "pdfmake/interfaces";

export class HeaderComponent implements RenderableComponent {
  constructor(
    private logoUrl?: string,
    private companyName?: string
  ) {}

  render(): Content | Content[] {
    return {
      canvas: [
        {
          type: 'rect',
          x: -40,
          y: -40,
          w: 596,
          h: 100,
          color: '#026EFA',
        },
      ]
    }
  }

}