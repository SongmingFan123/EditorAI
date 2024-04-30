import React, { useState,useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'quill/dist/quill.snow.css'
import { useAuth } from '@/context/AuthContext';
import { updateDocument } from '@/api/document_functions';
import { useRouter, useSearchParams } from 'next/navigation';
import { getDocument } from '@/api/document_functions';

interface DocumentEditorProps {
    documentContent: string;
    setDocumentContent: (content: string) => void;
    documentId: string;
    setDocumentId: (documentId: string) => void;
}

const ReactQuillNoSSR = dynamic(
    () => import('react-quill'), 
    { ssr: false }
);


  

const DocumentEditor = ({ documentContent, setDocumentContent,documentId,setDocumentId}:DocumentEditorProps) => {
    
    const { user } = useAuth();
    const userId = user?.uid as string;
    const searchParams = useSearchParams()
    const [editing, setEditing] = useState(false);
    const [currentDocumentName, setCurrentDocumentName] = useState<string>('');
    const [InitialDocumentName, setInitialDocumentName] = useState<string>('');

    useEffect(() => {
        const documentId = searchParams.get('documentid') as string;
        setDocumentId(documentId);

        const fetchDocument = async (documentId:string) => {
            const document = await getDocument(userId, documentId)
            console.log("Document:", document.message.Title)
            
            setInitialDocumentName(document.message.Title)
            setCurrentDocumentName(document.message.Title)
            console.log("test: ", document.message.Content)
            setDocumentContent(document.message.Content)
        }

        fetchDocument(documentId);



    }, []);


    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = e.target.value;
        setCurrentDocumentName(newTitle);

        if (InitialDocumentName !== newTitle) {
            setEditing(true);
            console.log("editing")
        }
        else {
            setEditing(false);
            console.log("not editing")
        }
    };



    var modules = {
        toolbar: [
            [{ size: ["small", false, "large", "huge"] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
                { align: [] }
            ],
            [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
        ]
    };

    
    var formats = [
        "header", "height", "bold", "italic",
        "underline", "strike", "blockquote",
        "list", "color", "bullet", "indent",
        "link", "image", "align", "size",
    ];

    const handleProcedureContentChange = async (content: string) => {

        console.log("content---->", content);
        setDocumentContent(content);
        await updateDocument(userId,documentId,InitialDocumentName,content);
    };

    const submitNewTitle = () => {
        console.log(currentDocumentName)
        if (currentDocumentName.length > 0) {
            updateDocument(userId,documentId,currentDocumentName,documentContent);
            setEditing(false);
        }
        
    }


    return (
        <div className='justify-evenly flex-row'>
            <div className="flex-row">
                {editing && <button onClick={submitNewTitle}>Save New Title</button>}
                <input className='text-2xl font-bold bg-transparent' placeholder={InitialDocumentName} onChange={handleTitleChange} />
            </div>
            <ReactQuillNoSSR
                modules={modules}
                formats={formats}
                value={documentContent}
                placeholder="write your content ...."
                onChange={handleProcedureContentChange}
                className='h-[80vh] rounded-lg'
            />
        </div>
    );
};

export default DocumentEditor;