import React from 'react';

interface OpenDocumentModalProps {
    title: string;
    showOpenConfirmation: boolean;
    setShowOpenConfirmation: (show: boolean) => void;
    editProject: () => void;
    promoteProject: () => void;
}

const OpenDocumentModal: React.FC<OpenDocumentModalProps> = ({
    title,
    showOpenConfirmation,
    setShowOpenConfirmation,
    editProject,
    promoteProject,
}) => {

    const handleClose = () => {
        setShowOpenConfirmation(false);
    }


    return (
        <>
            {showOpenConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                        <button
                            className="font-bold top-2 right-2 text-x"
                            onClick={handleClose}
                        >
                            X
                        </button>
                        <p className="text-lg text-center font-semibold mb-4">{title}</p>
                        <p className="text-lg text-center mb-4">What would you like to do with this project?</p>
                        <div className="flex justify-center">
                            <button
                                className="bg-brand-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4"
                                onClick={editProject}
                            >
                                Edit it
                            </button>
                            <button
                                className="bg-brand-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                onClick={promoteProject}
                            >
                                Promote it
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default OpenDocumentModal;