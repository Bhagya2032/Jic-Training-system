import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TrainersPopup from './TrainersPopup';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

function TrainersPage() {
  const [branches, setBranches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [branchesPerPage] = useState(10);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedBranches, setSelectedBranches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

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

  const handleUpdate = (branch) => {
    setSelectedBranches([branch]);
    setPopupOpen(true);
  };

  const showToastMessage = () => {
    toast.success('Successfully Added !', {
        position: toast.POSITION.TOP_RIGHT
    });
};

  const handleDelete = async (branchId) => {
    try {
      await axios.delete(`http://localhost:8005/api/branches/${branchId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(`Branch deleted successfully.`);
      fetchBranches();
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleDeleteSelected = async () => {
    try {
      const branchIds = selectedBranches.map((branch) => branch._id);

      await axios.delete('http://localhost:8005/api/branches/deleteAll', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          branchIds,
        },
      });
      toast.success(`All Branches deleted successfully.`);
      fetchBranches();
      setSelectedBranches([]);
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleAddBranch = () => {
    setSelectedBranches([]);
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const handlePopupSave = async (branchData) => {
    try {
      if (selectedBranches.length > 0) {
        await Promise.all(
          selectedBranches.map(async (selectedBranch) => {
            try {
              await axios.put(
                `http://localhost:8005/api/branches/${selectedBranch._id}`,
                branchData,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
              toast.success(`Branch "${selectedBranch.branchCode}" updated successfully.`);
            } catch (error) {
              console.log(error);
              toast.error(
                `Failed to update branch "${selectedBranch.branchCode}". Please try again.`
              );
            }
          })
        );
      } else {
        await axios.post('http://localhost:8005/api/branches', branchData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success(`Branch "${branchData.branchCode}" added successfully.`);
      }
      fetchBranches();
      setPopupOpen(false);
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
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
    <div className='bg-white min-h-screen p-2'>
      <div className='flex justify-between items-center bg-white mb-4'>
        <div className='flex items-center'>
          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 m-2 rounded flex item center'
            onClick={handleAddBranch}
          >
            <FaPlus className='mr-2' /> Add Trainer
          </button>
        </div>
      </div>

      {selectedBranches.length > 0 && (
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
                  <td className='py-2 px-4 border'>{branch.id}</td>
                  <td className='py-2 px-4 border'>{branch.code}</td>
                  <td className='py-2 px-4 border'>{branch.trainerName}</td>
                  <td className='py-2 px-4 border'>{branch.mobile}</td>
                  <td className='py-2 px-4 border'>{branch.email}</td>
                  <td className='py-2 px-4 border'>{branch.nic}</td>
                  <td className='py-2 px-4 border'>{branch.zone}</td>
                  <td className='py-2 px-4 border'>{branch.region}</td>
                  <td className='py-2 px-4 border'>{branch.branch}</td>
                  <td className='py-2 px-4 border'>{branch.channel}</td>
                  <td className='py-2 px-4 border'>
                    <button
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2'
                      onClick={() => handleUpdate(branch)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'
                      onClick={() => handleDelete(branch._id)}
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

        {isPopupOpen && (
        <TrainersPopup
          branch={selectedBranches.length === 1 ? selectedBranches[0] : null}
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
