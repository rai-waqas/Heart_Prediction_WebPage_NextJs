import React, { useState } from 'react';

interface Props {
  onNextStep: (name: string) => void;
}

const GetNameDiv: React.FC<Props> = ({ onNextStep }) => {
  const [name, setName] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNextStep(name);
  };

  return (
    <div className="flex flex-col w-full max-w-full min-w-full h-auto bg-gray-100 p-6 rounded shadow-lg">
      <h1 className="text-xl font-semibold mb-4 text-center">Please Enter Your Name</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row w-auto flex-1 justify-center">
            <input
            type="text"
            placeholder="Enter name here"
            className="p-2 mb-4 border border-gray-300 rounded "
            value={name}
            onChange={handleInputChange}
            />
        </div>
        <div className="flex flex-row w-auto flex-1 justify-end gap-2">
            <div className="flex flex-col">
                
                <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 px-5 "
                >
                Next
                </button>
            </div>
            <div className="flex flex-col">

                <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 px-5"
                >
                Skip
                </button>
            </div>

        </div>
      </form>
    </div>
  );
};

export default GetNameDiv;
