import { DocumentTemplate } from '../document.template';

export interface DocumentFactoryAbstract {
  createDocument(type: string, data: any): DocumentTemplate;
}
