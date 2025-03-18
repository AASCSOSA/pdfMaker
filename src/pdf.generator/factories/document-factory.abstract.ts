// src/pdf_factory/factories/document-factory.abstract.ts
import { DocumentTemplate } from '../components/document.template';

export interface DocumentFactoryAbstract {
  createDocument(type: string, data: any): DocumentTemplate;
}
