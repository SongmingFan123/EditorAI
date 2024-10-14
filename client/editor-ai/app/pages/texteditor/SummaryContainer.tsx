import React from 'react';

interface SummaryContainerProps {
    summary: string;
    onClose: () => void;
}

const SummaryContainer: React.FC<SummaryContainerProps> = ({ summary, onClose }) => {
    return (
        <div className="summary-container p-4 border rounded shadow-md mb-6">
            <h2 className="text-xl font-bold mb-2">Summary</h2>
            <p className="mb-4">{summary}</p>
            <button 
                onClick={onClose} 
                className="shadow-md px-6 py-1 text-lg border-4 border-brand-red text-brand-red bg-white rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-brand-red hover:text-white"
            >
                Close
            </button>
        </div>
    );
};

export default SummaryContainer;