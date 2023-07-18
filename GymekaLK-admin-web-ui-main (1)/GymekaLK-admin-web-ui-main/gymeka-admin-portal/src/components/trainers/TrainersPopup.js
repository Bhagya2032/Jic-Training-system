import React, { useState } from 'react';

function TrainersPopup({ branch, onClose, onSave }) {
  const [branchData, setBranchData] = useState({
    id: branch ? branch.id : '',
    code: branch ? branch.code : '',
    trainername: branch ? branch.trainername : '',
    mobile: branch ? branch.mobile : '',
    email: branch ? branch.email : '',
    nic: branch ? branch.nic : '',
    zone: branch ? branch.zone : '',
    region: branch ? branch.region : '',
    branch: branch ? branch.branch : '',
    channel: branch ? branch.channel : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBranchData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(branchData);
  };


  return (
    <div className="fixed top-0 left-0 flex items-center justify-center min-h-screen w-full bg-gray-800 bg-opacity-50">
      <div className="bg-white w-1/2 p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-4">{branch ? 'Update Branch' : 'Add Trainer'}</h2>
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
              value={branchData.id}
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
              value={branchData.code}
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
              value={branchData.trainername}
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
              value={branchData.mobile}
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
              value={branchData.email}
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
              value={branchData.nic}
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
              value={branchData.zone}
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
              value={branchData.region}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="branch">
              Branch
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="branch"
              name="branch"
              value={branchData.branch}
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
              value={branchData.channel}
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
            {branch ? 'Update' : 'Add'}
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

