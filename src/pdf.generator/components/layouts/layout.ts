import { RenderableComponent } from "../interfaces/renderable-component.interface";
import { Content } from "pdfmake/interfaces";

export enum LayoutType {
  VERTICAL,
  HORIZONTAL,
  GRID
}

export class Layout implements RenderableComponent {
  private components: RenderableComponent[] = [];

  constructor(
    private type: LayoutType = LayoutType.VERTICAL,
    private spacing: number = 10
  ) {
  }

  addComponent(component: RenderableComponent): Layout {
    this.components.push(component);
    return this;
  }

  render(): Content[] {
    const contents: Content[] = [];

    this.components.forEach((component, index) => {
      const renderedComponent = component.render();

      if (Array.isArray(renderedComponent)) {
        contents.push(...renderedComponent);
      } else {
        contents.push(renderedComponent);
      }

      // Añadir espaciado entre componentes
      if (index < this.components.length - 1) {
        contents.push({
          text: '',
          margin: [0, this.spacing, 0, 0]
        });
      }
    });

    return contents;
  }
}
