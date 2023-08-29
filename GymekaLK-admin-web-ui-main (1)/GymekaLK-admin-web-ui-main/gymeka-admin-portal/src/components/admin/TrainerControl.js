import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TrainerControlPopup from './popupbox/TrainerControlPopup';


function TrainerControl() {
  const [trainers, setTrainers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [trainersPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
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

  const handleDelete = async (trainerId) => {
    try {
      await axios.delete(`http://localhost:8005/api/trainer/${trainerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Trainer deleted successfully.');
      fetchTrainers();
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleEdit = (trainer) => {
    setSelectedTrainer(trainer);
    setPopupOpen(true);
  };

  const handleAddTrainer = () => {
    setSelectedTrainer(null);
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setSelectedTrainer(null);
    setPopupOpen(false);
  };

  const handlePopupSave = async (trainerData) => {
    try {
      if (selectedTrainer) {
        await axios.put(
          `http://localhost:8005/api/trainers/${selectedTrainer._id}`,
          trainerData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success('Trainer updated successfully.');
      } else {
        await axios.post('http://localhost:8005/api/trainer/register', trainerData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success('Trainer added successfully.');
      }
      fetchTrainers();
      setPopupOpen(false);
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filteredTrainers = trainers.filter((trainer) =>
      trainer.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTrainers(filteredTrainers);
  };

  const filteredTrainers = trainers.filter((trainer) => {
    return trainer.username.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const indexOfLastTrainer = currentPage * trainersPerPage;
  const indexOfFirstTrainer = indexOfLastTrainer - trainersPerPage;
  const currentTrainers = filteredTrainers.slice(
    indexOfFirstTrainer,
    indexOfLastTrainer
  );

  const totalPages = Math.ceil(trainers.length / trainersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white min-h-screen p-4">
    <h1 className='text-2xl font-bold text-white mb-4 text-center rounded-xl p-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>Trainer Management</h1>


      <div className="flex justify-between items-center mb-4">
      <button
        onClick={handleAddTrainer}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
      >
        Add Trainer
      </button>
        <form onSubmit={handleSearchSubmit} className='flex'>
          <input
            type="text"
            placeholder="Search by username"
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>
      
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentTrainers.map((trainer) => (
            <tr key={trainer._id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{trainer._id}</td>
              <td className="border px-4 py-2">{trainer.username}</td>
              <td className="border px-4 py-2">{trainer.email}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleEdit(trainer)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none mr-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(trainer._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`px-3 py-1 bg-blue-500 text-white rounded-md mx-1 hover:bg-blue-600 focus:outline-none ${
                currentPage === pageNumber ? 'font-bold' : ''
              }`}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
      {isPopupOpen && (
        <TrainerControlPopup
          initialTrainer={selectedTrainer}
          onSave={handlePopupSave}
          onClose={handlePopupClose}
        />
      )}
      <ToastContainer />
    </div>
  );
}

export default TrainerControl;
