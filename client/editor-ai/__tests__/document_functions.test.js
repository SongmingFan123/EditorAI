import fetchMock from 'fetch-mock-jest';
global.fetch = fetchMock.sandbox();

import { handleCreateDocument, 
         getDocuments, 
         updateDocument, 
         getDocument, 
         handleRemoveDocument 
} from 'app/api/document_functions'; 

describe('Document Service', () => {
  const userId = 'user1';
  const documentId = 'doc1';
  const documentName = 'Test Document';
  const documentContent = 'This is the content of the test document.';
  const newDocumentContent = 'This is the updated content of the test document.';

  beforeAll(() => {
    global.fetch = jest.fn();
});

beforeEach(() => {
    fetch.mockClear();
});
it('should create a document', async () => {
  fetch.mockResolvedValueOnce({
      status: 200,
      json: () => Promise.resolve({ data: documentId })
  });

  const result = await handleCreateDocument(userId, documentName, documentContent);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
      `https://se-editor-ai-production.up.railway.app/documents/create`,
      expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              user_id: userId,
              document_name: documentName,
              document: documentContent
          })
      })
  );
  expect(result).toBe(documentId);
});

it('should fetch all documents for a user', async () => {
  fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ documents: [] })
  });

  const result = await getDocuments(userId);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
      `https://se-editor-ai-production.up.railway.app/documents/getall/${userId}`,
      expect.objectContaining({
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
      })
  );
  expect(result).toEqual({ documents: [] });
});

it('should update a document', async () => {
  fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ success: true })
  });

  const result = await updateDocument(userId, documentId, documentName, newDocumentContent);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
      `https://se-editor-ai-production.up.railway.app/documents/update`,
      expect.objectContaining({
          method: 'PUT',
          body: JSON.stringify({
              user_id: userId,
              document_name: documentName,
              document_id: documentId,
              new_document: newDocumentContent
          })
      })
  );
});

it('should fetch a single document', async () => {
  fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ document: { id: documentId, content: documentContent } })
  });

  const result = await getDocument(userId, documentId);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
      `https://se-editor-ai-production.up.railway.app/documents/read/${userId}/${documentId}`,
      expect.objectContaining({
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
      })
  );
  expect(result).toEqual({ document: { id: documentId, content: documentContent } });
});

it('should delete a document', async () => {
  fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ success: true })
  });

  const result = await handleRemoveDocument(userId, documentId);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
      `https://se-editor-ai-production.up.railway.app/documents/delete/${userId}/${documentId}`,
      expect.objectContaining({
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
      })
  );
  expect(result).toEqual({ success: true });
});

afterAll(() => {
  global.fetch.mockRestore();
});
});