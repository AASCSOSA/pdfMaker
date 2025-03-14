import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';

export abstract class DocumentTemplate {
  private fileName: string;
  public GenerateDocumentStructure(): TDocumentDefinitions {
    return {
      content: [this.createHeader(), this.createBody(), this.createFooter()],
      styles: this.getStyles(),
    };
  }
  protected abstract createHeader(): Content[];
  protected abstract createBody(): Content[];
  protected abstract createFooter(): Content;
  protected abstract getStyles(): { [styleName: string]: object };
  protected abstract getDefaultStyle(): object;
  public setFileName(fileName: string): void {
    this.fileName = fileName;
  }

  public getFileName(): string {
    return this.fileName;
  }
}
