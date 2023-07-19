import React from 'react';
import ProgressValidation from './ProgressValidation';

function ProgressPage() {
  return (
    <div className="bg-white min-h-screen p-2">
      <h1 className="text-2xl mt-4 mb-3 ml-8 font-bold ">Progress</h1>
      <div className=' min-h-screen  overflow-y-auto'>
      <ProgressValidation />
      </div>
    </div>
  );
}

export default ProgressPage;

