import { DocumentTemplate } from './document-template';

jest.mock('./document-template');

describe('DocumentTemplate', () => {
  it('should be defined', () => {
    expect(DocumentTemplate).toBeDefined();
  });
});
