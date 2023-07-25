import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import CreateAssessment from './CreateAssessment';
import CreateAssessmentPopup from '../../components/trainings/CreateAssessmentPopup';
import LoadAssessmentPopup from '../../components/trainings/LoadAssessmentPopup';

const TrainingSchedule = () => {
  // State to manage the visibility of popup boxes
  const [showCreateAssessment, setShowCreateAssessment] = useState(false);
  const [showLoadAssessment, setShowLoadAssessment] = useState(false);
  const [showScheduleTraining, setShowScheduleTraining] = useState(false);

  return (
    <div>
      <div className="flex justify-between bg-red-300 p-8">
        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 m-2 rounded flex items-center'
          onClick={() => setShowCreateAssessment(true)}
        >
          <FaPlus className='mr-2' /> Create Assessment
        </button>
        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 m-2 rounded flex items-center'
          onClick={() => setShowLoadAssessment(true)}
        >
          <FaPlus className='mr-2' /> Load Assessment
        </button>
        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 m-2 rounded flex items-center'
          onClick={() => setShowScheduleTraining(true)}
        >
          <FaPlus className='mr-2' /> Schedule Training
        </button>
      </div>

      {/* Popup boxes */}
      {showCreateAssessment && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow">
            {/* Add your content for the Create Assessment popup */}
            <h2>Create Assessment Popup</h2>
            <div>
            <CreateAssessmentPopup/>
            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowCreateAssessment(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showLoadAssessment && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow">
            {/* Add your content for the Load Assessment popup */}
            <h2>Load Assessment Popup</h2>
            <div>
           <LoadAssessmentPopup/>

            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowLoadAssessment(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showScheduleTraining && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow">
            {/* Add your content for the Schedule Training popup */}
            <h2>Schedule Training Popup</h2>
            <div>
           {/* <ScheduleTraining/> */}

            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowScheduleTraining(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingSchedule;
