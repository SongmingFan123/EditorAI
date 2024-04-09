
export const handleCreateDocument = async (userId: string, documentName: string, documentContent: string) => {
    const documentData = JSON.stringify({
        user_id: userId,
        document_name: documentName,
        document: documentContent,
    });

    console.log('Document data:', documentData);

    try {
        const response = await fetch(`../api/create`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: documentData,
        });

        console.log('Response:', response);

        const data = await response.json();
        console.log('Data:', data);

        const status = response.ok;

        return status
    } catch (error) {
        console.error('Error creating document:', error);
        throw error;
    }
};

export const getDocuments = async (userId: string) => {


    console.log(`Getting documents for user: ${userId}`);


    try {
        const response = await fetch(`../api/getall/${userId}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        console.log('Response:', response);

        const data = await response.json();

        const documents = getDocuments(userId);
        console.log('Data:', data);

        return data

    } catch (error) {
        console.error('Error getting documents:', error);
        throw error;
    }
};

export const updateDocument = async (
    userId: string, 
    documentId: string, 
    documentName:string,
    new_document:string) => {
    
        try {
            const response = await fetch(`../api/update`, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "user_id": userId,
                    "document_name": documentName,
                    "document_id": documentId,
                    "new_document": new_document
                })
            });

            console.log('Response:', response);
            const data = await response.json();
            console.log(data)
    
    
        } catch (error) {
            console.error('Error getting documents:', error);
            throw error;
        }
    };

export const getDocument = async (userId: string, documentId: string) => {
    try {
        const response = await fetch(`../api/read/${userId}/${documentId}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        console.log('Response:', response);

        const data = await response.json();

        console.log('Data:', data);
        return data;

    } catch (error) {
        console.error('Error creating document:', error);
        throw error;
    }
};

export const handleRemoveDocument = async (userId: string, documentId: string) => {
    try {
        const response = await fetch(`../api/delete/${userId}/${documentId}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        console.log('Response:', response);

        const data = await response.json();

        console.log('Data:', data);
        return data;

    } catch (error) {
        console.error('Error deleting document:', error);
        throw error;
    }
};
