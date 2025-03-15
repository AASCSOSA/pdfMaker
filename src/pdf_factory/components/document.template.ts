// src/pdf/classes/document.template.ts
import { Content, StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";

export abstract class DocumentTemplate_Abstract {
  private fileName: string;
  protected components: any[] = [];

  constructor(fileName?: string) {
    if (fileName) {
      this.setFileName(fileName);
    }
  }

  public generateDocumentStructure(): TDocumentDefinitions {
    return {
      content: this.components.map(component => component.render()),
      styles: this.getStyles(),
      pageSize: 'A4',
    };
  }

  public addComponent(component: any): void {
    this.components.push(component);
  }

  protected abstract getStyles(): StyleDictionary;

  public setFileName(fileName: string): void {
    this.fileName = fileName;
  }

  public getFileName(): string {
    return this.fileName;
  }
}