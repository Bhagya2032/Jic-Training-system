import React, { useState, useEffect } from 'react';
//import TextField from '@mui/material/TextField';
import Modal from 'react-modal';
import { FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { FaPlus } from 'react-icons/fa';
//import CreateAssessmentPopup from './CreateAssessmentPopup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ManageProgress({ isOpen, onClose, onSave }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const description = 'This is the description of the item.';
  const instructions = 'This is the instructions of the item.';
  const [searchTerm, setSearchTerm] = useState('');
  const [progress, setProgress] = useState([]);
  const [progressPerPage] = useState(10);
  const token = localStorage.getItem('token');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProgress, setSelectedProgress] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      const response = await axios.get('http://localhost:8005/api/progress', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProgress(response.data.progress);
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
    setSelectedProgress([]);
    setPopupOpen(true);
  };

  const handleLoadAssessment = () => {
    setSelectedProgress([]);
    setPopupOpen(true);
  };

  const handleScheduleTraining = () => {
    setSelectedProgress([]);
    setPopupOpen(true);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectProgress = (progress) => {
    if (selectedProgress.includes(progress)) {
      setSelectedProgress(selectedProgress.filter((selectedProgress) => selectedProgress !== progress));
    } else {
      setSelectedProgress([...selectedProgress, progress]);
    }
  };

  const filteredProgress = progress.filter((progress) => {
    return progress.progressCode.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const indexOfLastProgress = currentPage * progressPerPage;
  const indexOfFirstProgress = indexOfLastProgress - progressPerPage;
  const currentProgress = filteredProgress.slice(indexOfFirstProgress, indexOfLastProgress);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };


  return (
    <div className="flex flex-col h-screen bg-white">
      <div className='bg-gray-400 m-8'>
        <div>
          <input
            type='text'
            className='bg-gray-100 text-gray-500 py-2 px-4 rounded '
            placeholder='Search by progress code...'
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {/* sample  style p1
        <div className="mb-4 flex items-center">
                  <label className="block text-gray-700 mr-2">Date</label>
                  <input
                    type="text"
                    id="field1"
                    className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div> */}
        <table className="table-auto w-full border">
          <tbody>
            <tr>
              <td className="border px-4 py-2">
                <div className="mb-4 flex items-center">
                  <label className="block text-black-700 mr-2 font-bold">Date</label>
                  <input
                    type="text"
                    id="field1"
                    className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </td>
              <td className="border px-4 py-2">
                <div className="mb-4 flex items-center">
                  <label className="block text-black-700 mr-2 font-bold">Status</label>
                  <input
                    type="text"
                    id="field1"
                    className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </td>

              <td className="border px-4 py-2"> <div className="mb-4 flex items-center">
                <div className='flex item-ceneter'>
                  <label className="block text-black-700 mr-2 font-bold">Start Date</label>

                  <input
                    type="datetime-local"
                    id="datetimepicker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />

                </div>
              </div>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2"> <div className="mb-4 flex items-center">
                <div className='flex item-ceneter'>
                  <label className="block text-black-700 mr-2 font-bold">End Date</label>

                  <input
                    type="datetime-local"
                    id="datetimepicker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />

                </div>
              </div>
              </td>
              <td className="border px-4 py-2"> <div className="mb-4 flex items-center">
                <label className="block text-black-700 mr-2 font-bold">Zone</label>
                <input
                  type="text"
                  id="field1"
                  className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div></td>
              <td className="border px-4 py-2"> <div className="mb-4 flex items-center">
                <label className="block text-black-700 mr-2 font-bold">Region</label>
                <input
                  type="text"
                  id="field1"
                  className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div></td>
              <td className="border px-4 py-2"> <div className="mb-4 flex items-center">
                <label className="block text-black-700 mr-2 font-bold">Format</label>
                <input
                  type="text"
                  id="field1"
                  className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div></td>
            </tr>
            <tr>
              <td className="border px-4 py-2"> <div className="mb-4 flex items-center">
                <label className="block text-black-700 mr-2 font-bold">Location</label>
                <input
                  type="text"
                  id="field1"
                  className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div></td>
              
              <td className="border px-4 py-2"> <div className="mb-4 flex items-center">
                <label className="block text-black-700 mr-2 font-bold">Trainers Name</label>
                <input
                  type="text"
                  id="field1"
                  className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* radio */}
      <div className='flex justify-center bg-gray-300 mx-8'>

        <h2 className='mr-2 text-center mt-2 border bg-black-500 rounded-lg p-2 mb-2 text-black font-bold'>Training Type </h2>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >

          <FormControlLabel value="csd1" control={<Radio />} label="CDS1" />
          <FormControlLabel value="avo" control={<Radio />} label="AVO" />
          <FormControlLabel value="cds2" control={<Radio />} label="CDS2" />
          <FormControlLabel value="cds3" control={<Radio />} label="CDS3" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />

        </RadioGroup>

      </div>

      

      <div>
        {/* Description Modal */}
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Description Pop-up">
          <h2 className="text-xl font-bold mb-4">Training Description</h2>
          <p>{description}</p>
          <button onClick={closeModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Close
          </button>
        </Modal>
      </div><div>
        {/* Instructions Modal */}
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Instructions Pop-up">
          <h2 className="text-xl font-bold mb-4">Admin Instructions</h2>
          <p>{instructions}</p>
          <button onClick={closeModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Close
          </button>
        </Modal>

      </div>

      {filteredProgress.length === 0 && <div className='text-white mb-4'>No progress found.</div>}

      {filteredProgress.length > 0 && (
        <table className='w-full ml-6 text-black '>
          <div class='h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
            <thead>
              <tr>
                <th className='py-2 px-4'></th>
                <th className='py-2 px-4'>Id</th>
                <th className='py-2 px-4'>Progress Name</th>
                <th className='py-2 px-4'>Mobile</th>
                <th className='py-2 px-4'>Email</th>
                <th className='py-2 px-4'>NIC</th>
              </tr>
            </thead>

            <tbody>
              {currentProgress.map((progress) => (
                <tr
                  key={progress._id}
                  className={`hover:bg-gray-100 ${selectedProgress.includes(progress) ? 'bg-gray-100' : ''
                    }`}
                >
                  <td className='py-2 px-4 border'>
                    <input
                      type='checkbox'
                      checked={selectedProgress.includes(progress)}
                      onChange={() => handleSelectProgress(progress)}
                    />
                  </td>
                  <td className='py-2 px-4 border'>{progress.progressCode}</td>
                  <td className='py-2 px-4 border'>{progress.location}</td>
                  <td className='py-2 px-4 border'>{progress.openTime}</td>
                  <td className='py-2 px-4 border'>{progress.closeTime}</td>
                  <td className='py-2 px-4 border'>{progress.managerName}</td>
                </tr>
              ))}
            </tbody>
          </div>
        </table>
      )}

      {filteredProgress.length > progressPerPage && (
        <div className='flex justify-center mt-4'>
          <nav>
            <ul className='flex items-center'>
              {Array.from({ length: Math.ceil(filteredProgress.length / progressPerPage) }).map(
                (_, index) => (
                  <li key={index}>
                    <button
                      className={`py-1 px-3 mx-1 rounded ${currentPage === index + 1 ? 'bg-gray-800 text-white' : 'bg-gray-300'
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
          <FaPlus className='mr-2' /> Save
        </button>

      </div>

    </div>
  );
}

export default ManageProgress;


