import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa';
import TrainingValidation from './TrainingValidation';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function CreateAssessmentPopup({ isOpen, onClose, onSave }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const assessmentDescription = 'This is the description of the item.';
  const [selectedBranches, setSelectedBranches] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (trainingDescription) => {
    setIsModalOpen(false);
  };

  const saveFormat = () => {
    setSelectedBranches([]);
    setPopupOpen(true);
  };

  const assign = () => {
    setSelectedBranches([]);
    setPopupOpen(true);
  };

  const updateSelectedBranches = () => {
    setSelectedBranches([]);
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
<Router>
      <Switch>
        <Route exact path="/" component={TrainingValidation} />
       <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Instructions Pop-up">
        <h2 className="text-xl font-bold mb-4">Training Description</h2>
        <p>{trainingDescription}</p>
        <button onClick={closeModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Close
        </button>
       </Modal>
        <Route exact path="/" component={TrainingValidation} />
       <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Instructions Pop-up">
        <h2 className="text-xl font-bold mb-4">Admin Instructions</h2>
        <p>{adminInstructions}</p>
        <button onClick={closeModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Close
        </button>

        {isPopupOpen && (
  <TrainingValidation
    branch={selectedBranches.length === 1 ? selectedBranches[0] : null}
    onSave={handlePopupCreateAssSave}
    onClose={handlePopupCreateAssClose}
    setSelectedBranches={updateSelectedBranches} 
  />
)}
                 {isPopupOpen && (
                 <TrainingValidation
                 branch={selectedBranches.length === 1 ? selectedBranches[0] : null}
                onSave={handlePopupLoadAssSave}
                onClose={handlePopupLoadAssClose}
                setSelectedBranches={updateSelectedBranches} 
           />
)}

 </Modal>
     
      <div>
          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 m-2 rounded flex item center'
            onClick={saveFormat}
          >
            <FaPlus className='mr-2' /> Save Format
          </button>          

          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 m-2 rounded flex item center'
            onClick={assign}
          >
            <FaPlus className='mr-2' /> Assign
          </button>  
   </div>          
          </Switch>
</Router>

  </div>   
  </div>   
</div>
);
}

export default CreateAssessmentPopup;


