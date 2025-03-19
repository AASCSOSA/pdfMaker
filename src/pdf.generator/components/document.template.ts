// src/pdf/classes/document.template.ts
import { Content, PageSize, StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';
import { defaultStyle, Fonts, PageSizes } from "../../styles/styles";
import { RenderableComponent } from './interfaces/renderable-component.interface';

export abstract class DocumentTemplate {
  private fileName: string;
  protected components: RenderableComponent[] = [];
  protected pageSize: PageSize = PageSizes.A4;

  constructor(fileName?: string, pageSize?: PageSize) {
    if (fileName) {
      this.setFileName(fileName);
    }
    if (pageSize) {
      this.setPageSize(pageSize);
    }
  }

  public generateDocumentStructure(): TDocumentDefinitions {
    return {
      content: this.components.map((component) => component.render()),
      defaultStyle: defaultStyle,
      pageSize: this.pageSize,
    };
  }

  public addComponent(component: any): void {
    this.components.push(component);
  }

  //protected abstract getStyles(): StyleDictionary;

  public setFileName(fileName: string): void {
    this.fileName = fileName;
  }

  public setPageSize(pageSize: PageSize): void {
    this.pageSize = pageSize;
  }

  public getFileName(): string {
    return this.fileName;
  }
}
