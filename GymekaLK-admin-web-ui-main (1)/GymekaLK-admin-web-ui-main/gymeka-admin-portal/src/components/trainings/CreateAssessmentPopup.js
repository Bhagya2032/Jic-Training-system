import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa';
import TrainingValidation from './TrainingValidation';
import SaveFormatAssign from './SaveFormatAssign';
// import { Routes, Route } from 'react-router-dom';

function CreateAssessmentPopup({ isOpen, onClose, onSave }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const trainingDescription = 'This is the description of the training.';
  const adminInstructions = 'This is the instructions of the admin.';
  const [selectedTrainings, setSelectedTrainings] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveFormat = () => {
    setSelectedTrainings([]);
    setPopupOpen(true);
  };

  const assign = () => {
    setSelectedTrainings([]);
    setPopupOpen(true);
  };

  const updateSelectedTrainings = () => {
    setSelectedTrainings([]);
    setPopupOpen(true);
  };

  const handlePopupCreateAssSave = () => {
    setPopupOpen(true);
  };

  const handlePopupCreateAssClose = () => {
    setPopupOpen(false);
  };

  const handlePopupLoadAssSave = () => {
    setPopupOpen(true);
  };

  const handlePopupLoadAssClose = () => {
    setPopupOpen(false);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex justify-between bg-white p-8">
        {/* Rows and columns remain the same */}
        <div className="w-1/4 bg-gray-200 p-8">
          <div className="mb-4">
            <TextField id="assessmentName" label="Assessment Name" variant="outlined" className="w-full" />
          </div>

          {/* Instructions Modal */}
          <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Instructions Pop-up">
            {/* Use shorthand <> and </> to include the content of TrainingValidation */}
            <>
              <h2 className="text-xl font-bold mb-4">Training Description</h2>
              <p>{trainingDescription}</p>
              <button onClick={closeModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                Close
              </button>

              <TrainingValidation />
            </>
          </Modal>


          <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Instructions Pop-up">
            {/* Use shorthand <> and </> to include the content of TrainingValidation */}
            <>
              <h2 className="text-xl font-bold mb-4">Training Description</h2>
              <p>{trainingDescription}</p>
              <button onClick={closeModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                Close
              </button>

              <TrainingValidation />
            </>
          </Modal>

            {isPopupOpen && (
              <TrainingValidation
                trainings={selectedTrainings.length === 1 ? selectedTrainings[0] : null}
                onSave={handlePopupCreateAssSave}
                onClose={handlePopupCreateAssClose}
                setSelectedTrainings={updateSelectedTrainings}
              />
            )}
            {isPopupOpen && (
              <TrainingValidation
                trainings={selectedTrainings.length === 1 ? selectedTrainings[0] : null}
                onSave={handlePopupLoadAssSave}
                onClose={handlePopupLoadAssClose}
                setSelectedTrainings={updateSelectedTrainings}
              />
            )}
          
<SaveFormatAssign/>

        </div>
      </div>
    </div>
  );
}

export default CreateAssessmentPopup;
