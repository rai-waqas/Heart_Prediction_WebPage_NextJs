import React from 'react';
import PredictionDiv from '../predictionDiv';

const PredictionModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto max-w-full min-w-full w-full">
      <div className="flex items-center justify-center min-h-screen p-4">
        {/* Background overlay */}
        <div className="fixed inset-0 bg-gray-500 opacity-75"></div>

        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-lg max-w-full w-full md:max-w-4/5 md:w-4/5 mx-auto p-6">
          {/* Close button */}
          <button
            className="absolute top-0 right-0 p-2 m-2 rounded-full bg-gray-200 hover:bg-gray-300"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal content */}
          <div className="flex flex-col w-full  h-auto justify-center">
            <PredictionDiv />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionModal;
