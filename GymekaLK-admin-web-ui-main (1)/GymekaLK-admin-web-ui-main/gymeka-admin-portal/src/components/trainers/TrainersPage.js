import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TrainersPopup from './TrainersPopup';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

function TrainersPage() {
  const [trainers, setTrainers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [trainersPerPage] = useState(10);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedTrainers, setSelectedTrainers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await axios.get('http://localhost:8005/api/trainers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTrainers(response.data.trainers);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (trainers) => {
    setSelectedTrainers([trainers]);
    setPopupOpen(true);
  };

  const showToastMessage = () => {
    toast.success('Successfully Added !', {
        position: toast.POSITION.TOP_RIGHT
    });
};

  const handleDelete = async (trainersId) => {
    try {
      await axios.delete(`http://localhost:8005/api/trainers/${trainersId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(`Trainer deleted successfully.`);
      fetchTrainers();
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleDeleteSelected = async () => {
    try {
      const trainersIds = selectedTrainers.map((trainers) => trainers._id);

      await axios.delete('http://localhost:8005/api/trainers/deleteAll', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          trainersIds,
        },
      });
      toast.success(`All Trainers deleted successfully.`);
      fetchTrainers();
      setSelectedTrainers([]);
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleAddTrainer = () => {
    setSelectedTrainers([]);
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const handlePopupSave = async (trainersData) => {
    try {
      if (selectedTrainers.length > 0) {
        await Promise.all(
          selectedTrainers.map(async (selectedTrainer) => {
            try {
              await axios.put(
                `http://localhost:8005/api/trainers/${selectedTrainer._id}`,
                trainersData,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
              toast.success(`Trainer "${selectedTrainer.trainersCode}" updated successfully.`);
            } catch (error) {
              console.log(error);
              toast.error(
                `Failed to update trainers "${selectedTrainer.trainersCode}". Please try again.`
              );
            }
          })
        );
      } else {
        await axios.post('http://localhost:8005/api/trainers', trainersData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success(`Trainer "${trainersData.trainersCode}" added successfully.`);
      }
      fetchTrainers();
      setPopupOpen(false);
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectTrainer = (trainers) => {
    if (selectedTrainers.includes(trainers)) {
      setSelectedTrainers(selectedTrainers.filter((selectedTrainer) => selectedTrainer !== trainers));
    } else {
      setSelectedTrainers([...selectedTrainers, trainers]);
    }
  };

  const filteredTrainers = trainers.filter((trainers) => {
    return trainers.trainersCode.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const indexOfLastTrainer = currentPage * trainersPerPage;
  const indexOfFirstTrainer = indexOfLastTrainer - trainersPerPage;
  const currentTrainers = filteredTrainers.slice(indexOfFirstTrainer, indexOfLastTrainer);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white min-h-screen p-4">
      <h1 className='text-2xl font-bold text-white mb-4 text-start rounded-xl p-2 bg-orange-500'>
        Create Trainers Page</h1>
      <div className='flex justify-between items-center bg-white mb-4'>
        <div className='flex items-center'>
          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 m-2 rounded flex item center'
            onClick={handleAddTrainer}
          >
            <FaPlus className='mr-2' /> Add Trainer
          </button>
        </div>
      </div>

      {selectedTrainers.length > 0 && (
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center'
          onClick={handleDeleteSelected}
        >
          <FaTrash className='mr-2' /> Delete Selected Trainers
        </button>
      )}

      <div>
        <input
          type='text'
          className='bg-gray-100 text-gray-500 py-2 px-4 rounded '
          placeholder='Search by trainers code...'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      {filteredTrainers.length === 0 && <div className='text-white mb-4'>No trainer found.</div>}

      {filteredTrainers.length > 0 && (
        <table className='w-full ml-6 text-black '>
          <div class='h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
            <thead>
              <tr>
                <th className='py-2 px-4'></th>
                <th className='py-2 px-4'>Id</th>
                <th className='py-2 px-4'>Code</th>
                <th className='py-2 px-4'>Trainer Name</th>
                <th className='py-2 px-4'>Mobile</th>
                <th className='py-2 px-4'>Email</th>
                <th className='py-2 px-4'>NIC</th>
                <th className='py-2 px-4'>Zone</th>
                <th className='py-2 px-4'>Region</th>
                <th className='py-2 px-4'>Branch</th>
                <th className='py-2 px-4'>Channel</th>
                <th className='py-2 px-4'></th>
              </tr>
            </thead>

            <tbody>
              {currentTrainers.map((trainers) => (
                <tr
                  key={trainers._id}
                  className={`hover:bg-gray-100 ${
                    selectedTrainers.includes(trainers) ? 'bg-gray-100' : ''
                  }`}
                >
                  <td className='py-2 px-4 border'>
                    <input
                      type='checkbox'
                      checked={selectedTrainers.includes(trainers)}
                      onChange={() => handleSelectTrainer(trainers)}
                    />
                  </td>
                  <td className='py-2 px-4 border'>{trainers.id}</td>
                  <td className='py-2 px-4 border'>{trainers.code}</td>
                  <td className='py-2 px-4 border'>{trainers.trainerName}</td>
                  <td className='py-2 px-4 border'>{trainers.mobile}</td>
                  <td className='py-2 px-4 border'>{trainers.email}</td>
                  <td className='py-2 px-4 border'>{trainers.nic}</td>
                  <td className='py-2 px-4 border'>{trainers.zone}</td>
                  <td className='py-2 px-4 border'>{trainers.region}</td>
                  <td className='py-2 px-4 border'>{trainers.branch}</td>
                  <td className='py-2 px-4 border'>{trainers.channel}</td>
                  <td className='py-2 px-4 border'>
                    <button
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2'
                      onClick={() => handleUpdate(trainers)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'
                      onClick={() => handleDelete(trainers._id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </div>
        </table>
      )}

      {filteredTrainers.length > trainersPerPage && (
        <div className='flex justify-center mt-4'>
          <nav>
            <ul className='flex items-center'>
              {Array.from({ length: Math.ceil(filteredTrainers.length / trainersPerPage) }).map(
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

        {isPopupOpen && (
        <TrainersPopup
          trainers={selectedTrainers.length === 1 ? selectedTrainers[0] : null}
          onClose={handlePopupClose}
          onSave={handlePopupSave}
        />
      )}

      <div className='toast-container'>
        {/* Toast messages */}
        <button onClick={showToastMessage}></button>
      </div>
    </div>
  );
}

export default TrainersPage;
