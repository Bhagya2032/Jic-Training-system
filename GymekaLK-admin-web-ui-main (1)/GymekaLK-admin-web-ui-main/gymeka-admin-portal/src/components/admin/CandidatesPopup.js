import React, { useState } from 'react';

function CandidatesPopup({ branch, onClose, onSave }) {
  const [branchData, setBranchData] = useState({
    branchCode: branch ? branch.branchCode : '',
    location: branch ? branch.location : '',
    openTime: branch ? branch.openTime : '',
    closeTime: branch ? branch.closeTime : '',
    managerName: branch ? branch.managerName : '',
    // status: branch ? branch.status : '',
    // avo: branch ? branch.avo : '',
    // cds2: branch ? branch.cds2 : '',
    // cds3: branch ? branch.cds3 : '',
    // designation: branch ? branch.designation : '',
   
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
        <h2 className="text-xl font-bold mb-4">{branch ? 'Update Branch' : 'Add Branch'}</h2>
        <div className="h-96 overflow-y-auto"> {/* Set the desired height and apply overflow-y */}
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <div className="mb-4">
            <label className="block mb-1" htmlFor="branchCode">
              Id
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="branchCode"
              name="branchCode"
              value={branchData.branchCode}
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
              value={branchData.location}
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
              value={branchData.openTime}
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
              value={branchData.closeTime}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="managerName">
              NIC
            </label>
            <input
              className="border border-gray-400 px-2 py-1 w-full"
              type="text"
              id="managerName"
              name="managerName"
              value={branchData.managerName}
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
              value={branchData.branchCode}
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
              value={branchData.branchCode}
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
              value={branchData.branchCode}
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
              value={branchData.branchCode}
              onChange={handleChange}
            />
          </div> */}
        
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
        </form>
      </div>
    </div>
    </div>
  );
}

export default CandidatesPopup;
