import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TrainerControlPopup({ initialTrainer, onClose, onSave }) {
  const [trainerData, setTrainerData] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (initialTrainer) {
      setTrainerData({
        username: initialTrainer.username,
        email: initialTrainer.email,
        password: '',
      });
    } else {
      setTrainerData({
        username: '',
        email: '',
        password: '',
      });
    }
  }, [initialTrainer]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTrainerData((prevTrainerData) => ({
      ...prevTrainerData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (!trainerData.username || !trainerData.email || !trainerData.password) {
      toast.error('Please fill in all fields.');
      return;
    }

    onSave(trainerData);
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-gray-800 bg-opacity-50">
      <div className="bg-white w-1/2 p-4 rounded-xl">
        <h3 className="text-lg font-semibold mb-4">{initialTrainer ? 'Edit Trainer' : 'Add Trainer'}</h3>
        <label className="block mb-2">
          Username:
          <input
            type="text"
            name="username"
            value={trainerData.username}
            onChange={handleInputChange}
            className="block w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={trainerData.email}
            onChange={handleInputChange}
            className="block w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </label>
        <label className="block mb-2">
          Password:
          <input
            type="password"
            name="password"
            value={trainerData.password}
            onChange={handleInputChange}
            className="block w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </label>
        <div className="flex justify-start mt-4">
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
          >
            Cancel
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default TrainerControlPopup;
