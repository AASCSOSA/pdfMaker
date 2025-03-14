import PdfPrinter from "pdfmake";
import { Content, TDocumentDefinitions } from "pdfmake/interfaces";

export abstract class DocumentTemplate {
  private fileName: string;

  public generateDocumentStructure(): TDocumentDefinitions {
    const header = this.createHeader();
    const body = this.createBody();
    const footer = this.createFooter();
    return {
      content: [header, body, footer],
      styles: this.getStyles(),
    };
  }

  protected abstract createHeader(): Content;

  protected abstract createBody(): Content[];

  protected abstract createFooter(): Content;

  protected abstract getStyles(): any;

  public setFileName(fileName: string): void {
    this.fileName = fileName;
  }

  public getFileName(): string {
    return this.fileName;
  }
}
