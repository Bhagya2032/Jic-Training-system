import React, { useState, useEffect } from 'react';
//import TextField from '@mui/material/TextField';
import Modal from 'react-modal';
import { FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { FaPlus } from 'react-icons/fa';
//import CreateAssessmentPopup from './CreateAssessmentPopup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateTraining({ isOpen, onClose, onSave }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [trainings, setTrainings] = useState([]);
  const [trainingsPerPage] = useState(10);
  const token = localStorage.getItem('token');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTrainings, setSelectedTrainings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTrainings();
  }, []);

  const fetchTrainings = async () => {
    try {
      const response = await axios.get('http://localhost:8005/api/trainings', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTrainings(response.data.trainings);
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

  const handleCreateTraining = () => {
    setSelectedTrainings([]);
    setPopupOpen(true);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectTraining = (trainings) => {
    if (selectedTrainings.includes(trainings)) {
      setSelectedTrainings(selectedTrainings.filter((selectedTraining) => selectedTraining !== trainings));
    } else {
      setSelectedTrainings([...selectedTrainings, trainings]);
    }
  };

  const filteredTrainings = trainings.filter((trainings) => {
    return trainings.trainingsCode.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const indexOfLastTraining = currentPage * trainingsPerPage;
  const indexOfFirstTraining = indexOfLastTraining - trainingsPerPage;
  const currentTrainings = filteredTrainings.slice(indexOfFirstTraining, indexOfLastTraining);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);  

  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };


  return (
    <div className="flex flex-col h-screen bg-white">
      <div className='bg-gray-400 m-8'>
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
              {/* radio */}
      <div className='flex justify-center bg-gray-300 mx-8'>

<h2 className='mr-2 text-center mt-2 border bg-black-500 rounded-lg p-2 mb-2 text-black font-bold'>Status </h2>
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
              <td className="border px-4 py-2"> <div className="mb-4 flex items-center">
                <label className="block text-black-700 mr-2 font-bold">Name</label>
                <input
                  type="text"
                  id="field1"
                  className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div></td>
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
                <label className="block text-black-700 mr-2 font-bold">Branch</label>
                <input
                  type="text"
                  id="field1"
                  className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div></td>
            </tr>
            <tr>
              <td className="border px-4 py-2"> <div className="mb-4 flex items-center">
                <label className="block text-black-700 mr-2 font-bold">Channel</label>
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
              <td className="border px-4 py-2"> <div className="mb-4 flex items-center">
                <label className="block text-black-700 mr-2 font-bold">Confirmed</label>
                <input
                  type="text"
                  id="field1"
                  className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div></td>
              <td className="border px-4 py-2"> <div className="mb-4 flex items-center">
                <label className="block text-black-700 mr-2 font-bold">Pending</label>
                <input
                  type="text"
                  id="field1"
                  className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div></td>
              <td className="border px-4 py-2"> <div className="mb-4 flex items-center">
                <label className="block text-black-700 mr-2 font-bold">Status</label>
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

      <div>
        <input
          type='text'
          className='bg-gray-100 text-gray-500 py-2 px-4 rounded '
          placeholder='Search by trainings code...'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {filteredTrainings.length === 0 && <div className='text-white mb-4'>No training found.</div>}

      {filteredTrainings.length > 0 && (
        <table className='w-full ml-6 text-black '>
          <div class='h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
            <thead>
              <tr>
                <th className='py-2 px-4'></th>
                <th className='py-2 px-4'>Id</th>
                <th className='py-2 px-4'>Training Name</th>
                <th className='py-2 px-4'>Mobile</th>
                <th className='py-2 px-4'>Email</th>
                <th className='py-2 px-4'>NIC</th>
              </tr>
            </thead>

            <tbody>
              {currentTrainings.map((trainings) => (
                <tr
                  key={trainings._id}
                  className={`hover:bg-gray-100 ${selectedTrainings.includes(trainings) ? 'bg-gray-100' : ''
                    }`}
                >
                  <td className='py-2 px-4 border'>
                    <input
                      type='checkbox'
                      checked={selectedTrainings.includes(trainings)}
                      onChange={() => handleSelectTraining(trainings)}
                    />
                  </td>
                  <td className='py-2 px-4 border'>{trainings.trainingsCode}</td>
                  <td className='py-2 px-4 border'>{trainings.location}</td>
                  <td className='py-2 px-4 border'>{trainings.openTime}</td>
                  <td className='py-2 px-4 border'>{trainings.closeTime}</td>
                  <td className='py-2 px-4 border'>{trainings.managerName}</td>
                </tr>
              ))}
            </tbody>
          </div>
        </table>
      )}

      {filteredTrainings.length > trainingsPerPage && (
        <div className='flex justify-center mt-4'>
          <nav>
            <ul className='flex items-center'>
              {Array.from({ length: Math.ceil(filteredTrainings.length / trainingsPerPage) }).map(
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
          onClick={handleCreateTraining}
        >
          <FaPlus className='mr-2' /> Create Training
        </button>

      </div>

    </div>
  );
}

export default CreateTraining;


