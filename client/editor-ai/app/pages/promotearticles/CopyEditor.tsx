import React from 'react';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import {useRouter} from 'next/navigation';
import { generateSocialMediaCopy } from '@/api/handle_ai';
import Image from 'next/image';

interface CopyEditorProps {
    documentContent:string
}
const ReactQuillNoSSR = dynamic(
    () => import('react-quill'), 
    { ssr: false }
);


const CopyEditor: React.FC<CopyEditorProps> = ({
    
}) => {

    const [copyText, setCopyText] = useState<string>("Testing")
    const router = useRouter();

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

    const handleCopyContentChange = async (content: string) => {
        setCopyText(content);
    };

    const handleRefreshCopy = async () => {
        const res= await generateSocialMediaCopy(copyText) as string;
        setCopyText(res)
        console.log(res)
    };






    return (
        <div>
            <div className='flex flex-col'>
                <div className='flex flex-row justify-evenly'>
                    <h1 className='text-2xl'>AI Generated Social Media Copy</h1>
                    <img src='/refresh-color.svg' alt="refresh icon" width={100} height={100} onClick={handleRefreshCopy}/>
                </div>

                <ReactQuillNoSSR
                    modules={modules}
                    formats={formats}
                    value={copyText}
                    placeholder={copyText}
                    onChange={handleCopyContentChange}
                    className='h-[80vh] rounded-lg bg-white p-4'
                />
                

            </div>
        </div>
    );
};

export default CopyEditor;