import React from 'react';
import ProgressValidation from './ProgressValidation';

function ProgressPage() {
  return (
    <div className="bg-white min-h-screen p-4">
      <h1 className='text-2xl font-bold text-white mb-4 text-start rounded-xl p-2 bg-orange-500'>
        Create Progress Page</h1>
      <div className=' min-h-screen  overflow-y-auto'>
      <ProgressValidation />
      </div>
    </div>
  );
}

export default ProgressPage;

