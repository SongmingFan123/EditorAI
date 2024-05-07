export const handleCreateDocument = async (
  userId: string,
  documentName: string,
  documentContent: string,
) => {
  const documentData = JSON.stringify({
    user_id: userId,
    document_name: documentName,
    document: documentContent,
  });

  try {
    const response = await fetch(
      `https://se-editor-ai-production.up.railway.app/documents/create`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: documentData,
      },
    );

    if (response.status !== 200) {
      return null;
    } else {
      const data = await response.json();

      const documentId = data.data;

      return documentId;
    }
  } catch (error) {
    console.error("Error creating document:", error);
    throw error;
  }
};

export const getDocuments = async (userId: string) => {
  try {
    const response = await fetch(
      `https://se-editor-ai-production.up.railway.app/documents/getall/${userId}`,
      {
        // const response = await fetch(`https://se-editor-ai-production.up.railway.app/documents/getall/${userId}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();

    // const documents = getDocuments(userId);

    return data;
  } catch (error) {
    console.error("Error getting documents:", error);
    throw error;
  }
};

export const updateDocument = async (
  userId: string,
  documentId: string,
  documentName: string,
  new_document: string,
) => {
  const body = JSON.stringify({
    user_id: userId,
    document_name: documentName,
    document_id: documentId,
    new_document: new_document,
  });

  try {
    const response = await fetch(
      `https://se-editor-ai-production.up.railway.app/documents/update`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      },
    );

    const data = await response.json();
  } catch (error) {
    console.error("Error getting documents:", error);
    throw error;
  }
};

export const getDocument = async (userId: string, documentId: string) => {
  try {
    const response = await fetch(
      `https://se-editor-ai-production.up.railway.app/documents/read/${userId}/${documentId}`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error creating document:", error);
    throw error;
  }
};

export const handleRemoveDocument = async (
  userId: string,
  documentId: string,
) => {
  try {
    const response = await fetch(
      `https://se-editor-ai-production.up.railway.app/documents/delete/${userId}/${documentId}`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};
