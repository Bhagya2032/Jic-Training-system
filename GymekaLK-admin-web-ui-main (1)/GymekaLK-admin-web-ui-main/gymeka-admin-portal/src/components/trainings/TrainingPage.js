import React from 'react';
import TrainingValidation from './TrainingValidation';

function TrainingPage() {
  return (
    <div className="bg-white min-h-screen p-2">
      <h1 className="text-2xl mt-4 mb-3 ml-8 font-bold ">Create Training</h1>
      <div className=' min-h-screen  overflow-y-auto'>
      <TrainingValidation />
      </div>
    </div>
  );
}

export default TrainingPage;
