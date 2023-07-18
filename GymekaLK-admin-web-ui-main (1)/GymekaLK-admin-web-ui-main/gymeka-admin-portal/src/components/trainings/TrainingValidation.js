import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Modal from 'react-modal';
import { FormControlLabel,RadioGroup,Radio } from '@mui/material';
import { FaPlus } from 'react-icons/fa';
//import CreateAssessmentPopup from './CreateAssessmentPopup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import DateTimePicker from 'react-datetime-picker' 

function TrainingValidation({ isOpen, onClose, onSave }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const description = 'This is the description of the item.';
  const instructions = 'This is the instructions of the item.';
  const [searchTerm, setSearchTerm] = useState('');
  const [branches, setBranches] = useState([]);
  const [branchesPerPage] = useState(10);
  const token = localStorage.getItem('token');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBranches, setSelectedBranches] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    fetchBranches();
  }, []);

  const fetchBranches = async () => {
    try {
      const response = await axios.get('http://localhost:8005/api/branches', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBranches(response.data.branches);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddAssessment = () => {
    setSelectedBranches([]);
    setPopupOpen(true);
  };

  const handleLoadAssessment = () => {
    setSelectedBranches([]);
    setPopupOpen(true);
  };

  const handleScheduleTraining = () => {
    setSelectedBranches([]);
    setPopupOpen(true);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectBranch = (branch) => {
    if (selectedBranches.includes(branch)) {
      setSelectedBranches(selectedBranches.filter((selectedBranch) => selectedBranch !== branch));
    } else {
      setSelectedBranches([...selectedBranches, branch]);
    }
  };

  const filteredBranches = branches.filter((branch) => {
    return branch.branchCode.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const indexOfLastBranch = currentPage * branchesPerPage;
  const indexOfFirstBranch = indexOfLastBranch - branchesPerPage;
  const currentBranches = filteredBranches.slice(indexOfFirstBranch, indexOfLastBranch);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex justify-between bg-white p-8">
        {/* Rows and columns remain the same */}
        <div className="w-1/4 bg-gray-200 p-8">
   <div className="w-full">
      {/* <table className="w-full">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Date</th>
            <th className="border border-gray-400 px-4 py-2">Status</th>
            <th className="border border-gray-400 px-4 py-2">Channel</th>
            <th className="border border-gray-400 px-4 py-2">Training Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td className="border border-gray-400 px-4 py-2">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </td>
          </tr>
          <tr>
          <td className="border border-gray-400 px-4 py-2">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </td>          </tr>
          <tr>
          <td className="border border-gray-400 px-4 py-2">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </td>
            <td className="border border-gray-400 px-4 py-2">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </td>          </tr>
        </tbody>
      </table> */}
 </div>
 <div className="grid grid-cols-3 gap-4">
      {/* First Row */}
      <div className="bg-blue-300 p-4">Item 1</div>
      <div className="bg-green-300 p-4">Item 2</div>
      <div className="bg-yellow-300 p-4">Item 3</div>
      
      {/* Second Row */}
      <div className="bg-pink-300 p-4">Item 4</div>
      <div className="bg-purple-300 p-4">Item 5</div>
      <div className="bg-red-300 p-4">Item 6</div>
      
      {/* Third Row */}
      <div className="bg-orange-300 p-4">Item 7</div>
      <div className="bg-teal-300 p-4">Item 8</div>
      <div className="bg-indigo-300 p-4">Item 9</div>
    </div>
        </div>
      </div>
      {/* radio */}
      <div className='flex justify-center bg-gray-300 mx-8'>
         
      <h2 className='mr-2 text-center mt-2 border bg-black-500 rounded-lg p-2 mb-2 text-black'>Training Type </h2>
          <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {/* form control */}
       
        <FormControlLabel value="csd1" control={<Radio />} label="CDS1" />
        <FormControlLabel value="avo" control={<Radio />} label="AVO" />
        <FormControlLabel value="cds2" control={<Radio />} label="CDS2" />  
        <FormControlLabel value="cds3" control={<Radio />} label="CDS3" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />

      </RadioGroup>

          </div>
       
       <div className='mt-4 mx-8'>
       <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">
               {/* Training Description and Admin Instructions Buttons */}
      <div className="flex justify-between bg-white p-8">
        <div>
          <button onClick={openModal} className="bg-blue-500 text-white py-2 px-4 rounded">
            Training Description
          </button>
        </div>
        <div>
          <button onClick={openModal} className="bg-blue-500 text-white py-2 px-4 rounded">
            Admin Instructions
          </button>
        </div>
      </div>
            </th>
            <th className="px-4 py-2 border">Column 2</th>
            <th className="px-4 py-2 border">Column 3</th>
            <th className="px-4 py-2 border">Column 4</th>
            <th className="px-4 py-2 border">Column 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Data 1</td>
            <td className="border px-4 py-2">Data 2</td>
            <td className="border px-4 py-2">Data 3</td>
            <td className="border px-4 py-2">Data 4</td>
            <td className="border px-4 py-2">Data 5</td>
          </tr>
        </tbody>
      </table>
       </div>
     








     

<div>
      {/* Description Modal */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Description Pop-up">
        <h2 className="text-xl font-bold mb-4">Description</h2>
        <p>{description}</p>
        <button onClick={closeModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Close
        </button>
      </Modal>
</div><div>
      {/* Instructions Modal */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Instructions Pop-up">
        <h2 className="text-xl font-bold mb-4">Instructions</h2>
        <p>{instructions}</p>
        <button onClick={closeModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Close
        </button>
      </Modal>
  
</div>


     <div>
        <input
          type='text'
          className='bg-gray-100 text-gray-500 py-2 px-4 rounded '
          placeholder='Search by branch code...'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

{filteredBranches.length === 0 && <div className='text-white mb-4'>No candidate found.</div>}

{filteredBranches.length > 0 && (
  <table className='w-full ml-6 text-black '>
    <div class='h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
      <thead>
        <tr>
          <th className='py-2 px-4'></th>
          <th className='py-2 px-4'>Id</th>
          <th className='py-2 px-4'>Candidate Name</th>
          <th className='py-2 px-4'>Mobile</th>
          <th className='py-2 px-4'>Email</th>
          <th className='py-2 px-4'>NIC</th>
        </tr>
      </thead>

      <tbody>
        {currentBranches.map((branch) => (
          <tr
            key={branch._id}
            className={`hover:bg-gray-100 ${
              selectedBranches.includes(branch) ? 'bg-gray-100' : ''
            }`}
          >
            <td className='py-2 px-4 border'>
              <input
                type='checkbox'
                checked={selectedBranches.includes(branch)}
                onChange={() => handleSelectBranch(branch)}
              />
            </td>
            <td className='py-2 px-4 border'>{branch.branchCode}</td>
            <td className='py-2 px-4 border'>{branch.location}</td>
            <td className='py-2 px-4 border'>{branch.openTime}</td>
            <td className='py-2 px-4 border'>{branch.closeTime}</td>
            <td className='py-2 px-4 border'>{branch.managerName}</td>
                </tr>
              ))}
            </tbody>
          </div>
        </table>
      )}

      {filteredBranches.length > branchesPerPage && (
        <div className='flex justify-center mt-4'>
          <nav>
            <ul className='flex items-center'>
              {Array.from({ length: Math.ceil(filteredBranches.length / branchesPerPage) }).map(
                (_, index) => (
                  <li key={index}>
                    <button
                      className={`py-1 px-3 mx-1 rounded ${
                        currentPage === index + 1 ? 'bg-gray-800 text-white' : 'bg-gray-300'
                      }`}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      )}



     <div className="flex justify-between bg-white p-8">
         <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 m-2 rounded flex item center'
            onClick={handleAddAssessment}
          >
            <FaPlus className='mr-2' /> Create Assessment
          </button>
          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 m-2 rounded flex item center'
            onClick={handleLoadAssessment}
          >
            <FaPlus className='mr-2' /> Load Assessment
          </button>
          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 m-2 rounded flex item center'
            onClick={handleScheduleTraining}
          >
            <FaPlus className='mr-2' /> Schedule Training
           </button>

      </div>
      
</div>
  );
}

export default TrainingValidation;


