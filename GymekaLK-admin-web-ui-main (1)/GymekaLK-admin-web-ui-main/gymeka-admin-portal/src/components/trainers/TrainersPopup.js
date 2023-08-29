import React, { useState } from 'react';

function TrainersPopup({ trainers, onClose, onSave }) {
  const [trainersData, setTrainerData] = useState({
    id: trainers ? trainers.id : '',
    code: trainers ? trainers.code : '',
    trainername: trainers ? trainers.trainername : '',
    mobile: trainers ? trainers.mobile : '',
    email: trainers ? trainers.email : '',
    nic: trainers ? trainers.nic : '',
    zone: trainers ? trainers.zone : '',
    region: trainers ? trainers.region : '',
    trainers: trainers ? trainers.trainers : '',
    channel: trainers ? trainers.channel : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainerData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(trainersData);
  };


  return (
    <div className="fixed top-0 left-0 flex items-center justify-center min-h-screen w-full bg-gray-800 bg-opacity-50">
      <div className="bg-white w-1/2 p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-4">{trainers ? 'Update Trainer' : 'Add Trainer'}</h2>
        <div className="h-96 overflow-y-auto"> {/* Set the desired height and apply overflow-y */}
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <div className="mb-4">
            <label className="block mb-1" htmlFor="id">
              Id
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="id"
              name="id"
              value={trainersData.id}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="code">
              Code
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="code"
              name="code"
              value={trainersData.code}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="trainername">
              Trainer Name
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="trainername"
              name="trainername"
              value={trainersData.trainername}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="mobile">
              Mobile
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="mobile"
              name="mobile"
              value={trainersData.mobile}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="email"
              name="email"
              placeholder='example@gmail.com'
              value={trainersData.email}
              onChange={handleChange}
            />
             </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="nic">
               NIC
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="nic"
              name="nic"
              value={trainersData.nic}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="zone">
              Zone
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="zone"
              name="zone"
              value={trainersData.zone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="region">
              Region
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="region"
              name="region"
              value={trainersData.region}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="trainers">
              Trainer
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="trainers"
              name="trainers"
              value={trainersData.trainers}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="channel">
              Channel
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="channel"
              name="channel"
              value={trainersData.channel}
              onChange={handleChange}
            />
          </div>
          </form>
        </div>
        <div className="flex justify-start mt-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded"
            type="submit"
          >
            {trainers ? 'Update' : 'Add'}
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrainersPopup;

