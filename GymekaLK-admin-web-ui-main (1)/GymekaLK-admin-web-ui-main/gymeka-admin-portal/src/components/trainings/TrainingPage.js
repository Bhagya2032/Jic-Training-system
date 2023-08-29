import React from 'react';
import TrainingValidation from './TrainingValidation';

function TrainingPage() {
  return (
    <div className="bg-white min-h-screen p-4">
      <h1 className='text-2xl font-bold text-white mb-4 text-start rounded-xl p-2 bg-orange-500'>
        Create Training Page</h1>
      <div className=' min-h-screen  overflow-y-auto'>
      <TrainingValidation />
      </div>
    </div>
  );
}

export default TrainingPage;
