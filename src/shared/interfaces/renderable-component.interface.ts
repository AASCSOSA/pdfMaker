import { Content } from 'pdfmake/interfaces';

export interface RenderableComponent {
  render(): Content | Content[];
}
