import { RenderableComponent } from "./interfaces/renderable-component.interface";

export class SizedBoxComponent implements RenderableComponent {
  constructor(
    private width: number,
    private height: number,
  ) {
  }

  render() {
    return {
      text: '',
      width: this.width,
      height: this.height,
    };
  }
}
