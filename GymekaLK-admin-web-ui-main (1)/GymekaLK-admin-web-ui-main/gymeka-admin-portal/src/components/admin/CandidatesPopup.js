import React, { useState } from 'react';

function CandidatesPopup({ candidates, onClose, onSave }) {
  const [candidatesData, setCandidateData] = useState({
    candidatesCode: candidates ? candidates.candidatesCode : '',
    location: candidates ? candidates.location : '',
    openTime: candidates ? candidates.openTime : '',
    closeTime: candidates ? candidates.closeTime : '',
    trainerName: candidates ? candidates.trainerName : '',
    // status: candidates ? candidates.status : '',
    // avo: candidates ? candidates.avo : '',
    // cds2: candidates ? candidates.cds2 : '',
    // cds3: candidates ? candidates.cds3 : '',
    // designation: candidates ? candidates.designation : '',
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidateData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(candidatesData);
  };


  return (
    <div className="fixed top-0 left-0 flex items-center justify-center min-h-screen w-full bg-gray-800 bg-opacity-50">
      <div className="bg-white w-1/2 p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-4">{candidates ? 'Update Candidate' : 'Add Candidate'}</h2>
        <div className="h-96 overflow-y-auto"> {/* Set the desired height and apply overflow-y */}
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <div className="mb-4">
            <label className="block mb-1" htmlFor="candidatesCode">
              Id
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="candidatesCode"
              name="candidatesCode"
              value={candidatesData.candidatesCode}
              onChange={handleChange}
            />
          </div>
            <div className="mb-4">
            <label className="block mb-1" htmlFor="location">
              Candidate Name
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="location"
              name="location"
              value={candidatesData.location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="openTime">
              Mobile
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="openTime"
              name="openTime"
              value={candidatesData.openTime}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="closeTime">
              Email
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="closeTime"
              name="closeTime"
            //  placeholder='example@gmail.com'
              value={candidatesData.closeTime}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="trainerName">
              NIC
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="trainerName"
              name="trainerName"
              value={candidatesData.trainerName}
              onChange={handleChange}
            />
          </div>
          {/* <div className="mb-4">
            <label className="block mb-1" htmlFor="status">
              Status
            </label>
            <select className="w-full p-2.5 text-gray-500 bg-white rounded-md shadow-sm outline-black-500 appearance-none border focus:border-black-400 px-2 py-1">
                <option>CDS1</option>
                <option>Pending Code</option>
                <option>Training Path</option>
                <option>Completed</option>
            </select>
   
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="avo">
              AVO
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="avo"
              name="avo"
              value={candidatesData.candidatesCode}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="cds2">
              CDS2
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="cds2"
              name="cds2"
              value={candidatesData.candidatesCode}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="cds3">
              CDS3
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="cds3"
              name="cds3"
              value={candidatesData.candidatesCode}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="designation">
              Designation
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="designation"
              name="designation"
              value={candidatesData.candidatesCode}
              onChange={handleChange}
            />
          </div> */}
        
        <div className="flex justify-start mt-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded"
            type="submit"
          >
            {candidates ? 'Update' : 'Add'}
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default CandidatesPopup;
