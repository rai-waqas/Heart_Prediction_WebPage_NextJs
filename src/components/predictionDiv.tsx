import React, { useState } from 'react';
import GetNameDiv from './getNameDiv';
import GetInfoDiv from './getInfoDiv';
import ResultDisplayDiv from './resultDisplayDiv'; // Import your ResultDisplayDiv component

const PredictionDiv = () => {
  const [showGetNameDiv, setShowGetNameDiv] = useState(true);
  const [showGetInfoDiv, setShowGetInfoDiv] = useState(false);
  const [showResultDisplayDiv, setShowResultDisplayDiv] = useState(false);
  const [name, setName] = useState('');
  const [heartDisease, setHeartDisease] = useState<boolean | null>(null);

  const handleNextStep = (enteredName: string) => {
    setName(enteredName);
    setShowGetNameDiv(false);
    setShowGetInfoDiv(true);
  };

  const handleFormSubmit = (heartDisease: boolean) => {
    setHeartDisease(heartDisease);
    setShowGetInfoDiv(false);
    setShowResultDisplayDiv(true);
  };

  return (
    <>
      <div className="flex flex-row w-4/5 h-auto justify-center p-2 mx-auto my-4 rounded-lg">
        <div className="flex flex-col w-full max-w-full min-w-full h-auto">
          <div className={`transition-all duration-500 ${showGetNameDiv ? 'block' : 'hidden'}`}>
            <GetNameDiv onNextStep={handleNextStep} />
          </div>
          <div className={`transition-all duration-500 ${showGetInfoDiv ? 'block' : 'hidden'}`}>
            <GetInfoDiv name={name} onFormSubmit={handleFormSubmit} />
          </div>
          <div className={`transition-all duration-500 ${showResultDisplayDiv ? 'block' : 'hidden'}`}>
            <ResultDisplayDiv name={name} heartDisease={heartDisease}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default PredictionDiv;