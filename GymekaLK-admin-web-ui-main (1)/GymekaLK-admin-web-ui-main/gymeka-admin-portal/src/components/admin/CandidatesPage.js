import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CandidatesPopup from './CandidatesPopup';
import BulkUpload from '../admin/popupbox/BulkUpload';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CandidatesPage() {
  const [candidates, setCandidates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [candidatesPerPage] = useState(10);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isBulkUploadOpen, setBulkUploadOpen] = useState(false);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const response = await axios.get('http://localhost:8005/api/candidates', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCandidates(response.data.candidates);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (candidate) => {
    setSelectedCandidates([candidate]);
    setPopupOpen(true);
  };

  const handleDelete = async (candidateId) => {
    try {
      await axios.delete(`http://localhost:8005/api/candidates/${candidateId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(`Candidate deleted successfully.`);
      fetchCandidates();
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };
  const handleAddCandidate = () => {
    setSelectedCandidates([]);
    setPopupOpen(true);
  };

  const handleBulkUploadOpen = () => {
    setBulkUploadOpen(true);
  };

  const handleBulkUploadClose = () => {
    setBulkUploadOpen(false);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const handlePopupSave = async (candidatesData) => {
    try {
      if (selectedCandidates.length > 0) {
        await Promise.all(
          selectedCandidates.map(async (selectedCandidate) => {
            try {
              await axios.put(
                `http://localhost:8005/api/candidates/${selectedCandidate._id}`,
                candidatesData,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
              toast.success(`Candidate "${selectedCandidate.candidatesCode}" updated successfully.`);
            } catch (error) {
              console.log(error);
              toast.error(
                `Failed to update candidate "${selectedCandidate.candidatesCode}". Please try again.`
              );
            }
          })
        );
      } else {
        await axios.post('http://localhost:8005/api/candidates', candidatesData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success(`Candidate "${candidatesData.candidatesCode}" added successfully.`);
      }
      fetchCandidates();
      setPopupOpen(false);
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectCandidate = (candidates) => {
    if (selectedCandidates.includes(candidates)) {
      setSelectedCandidates(selectedCandidates.filter((selectedCandidate) => selectedCandidate !== candidates));
    } else {
      setSelectedCandidates([...selectedCandidates, candidates]);
    }
  };

  const filteredCandidates = candidates.filter((candidates) => {
    return candidates.candidatesCode.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const indexOfLastCandidate = currentPage * candidatesPerPage;
  const indexOfFirstCandidate = indexOfLastCandidate - candidatesPerPage;
  const currentCandidates = filteredCandidates.slice(indexOfFirstCandidate, indexOfLastCandidate);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white min-h-screen p-4">
      <h1 className='text-2xl font-bold text-white mb-4 text-start rounded-xl p-2 bg-orange-500'>
        Create Candidate Page</h1>
      <div className='flex justify-between items-center bg-white mb-4'>
        <div className='flex items-center'>
          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 m-2 rounded flex item center'
            onClick={handleAddCandidate}
          >
            <FaPlus className='mr-2' /> Add Candidate
          </button>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex item center '
            onClick={handleBulkUploadOpen}
          >
            <FaPlus className='mr-2' /> Bulk Upload
          </button>
        </div>
      </div>

      {selectedCandidates.length > 0 && (
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center'
          onClick={handleDeleteSelected}
        >
          <FaTrash className='mr-2' /> Delete Selected Candidates
        </button>
      )}

      <div>
        <input
          type='text'
          className='bg-gray-100 text-gray-500 py-2 px-4 rounded '
          placeholder='Search by candidates code...'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      {filteredCandidates.length === 0 && <div className='text-white mb-4'>No candidate found.</div>}

      {filteredCandidates.length > 0 && (
        <table className='w-full ml-6 text-black '>
          <div class='h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
            <thead>
              <tr>
                <th className='py-2 px-4'></th>
                <th className='py-2 px-4'>Id</th>
                <th className='py-2 px-4'>Candidate Name</th>
                <th className='py-2 px-4'>Mobile</th>
                <th className='py-2 px-4'>Email</th>
                <th className='py-2 px-4'>NIC</th>
                <th className='py-2 px-4'>Status</th>
                <th className='py-2 px-4'>AVO</th>
                <th className='py-2 px-4'>CDS2</th>
                <th className='py-2 px-4'>CDS3</th>
                <th className='py-2 px-4'>Designation</th>
                <th className='py-2 px-4'></th>
              </tr>
            </thead>

            <tbody>
              {currentCandidates.map((candidates) => (
                <tr
                  key={candidates._id}
                  className={`hover:bg-gray-100 ${
                    selectedCandidates.includes(candidates) ? 'bg-gray-100' : ''
                  }`}
                >
                  <td className='py-2 px-4 border'>
                    <input
                      type='checkbox'
                      checked={selectedCandidates.includes(candidates)}
                      onChange={() => handleSelectCandidate(candidates)}
                    />
                  </td>
                  <td className='py-2 px-4 border'>{candidates.id}</td>
                  <td className='py-2 px-4 border'>{candidates.candidateName}</td>
                  <td className='py-2 px-4 border'>{candidates.mobile}</td>
                  <td className='py-2 px-4 border'>{candidates.email}</td>
                  <td className='py-2 px-4 border'>{candidates.nic}</td>
                  <td className='py-2 px-4 border'>{candidates.status}</td>
                  <td className='py-2 px-4 border'>{candidates.avo}</td>
                  <td className='py-2 px-4 border'>{candidates.cds2}</td>
                  <td className='py-2 px-4 border'>{candidates.cds3}</td>
                  <td className='py-2 px-4 border'>{candidates.designation}</td>
                  <td className='py-2 px-4 border'>
                    <button
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2'
                      onClick={() => handleUpdate(candidates)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'
                      onClick={() => handleDelete(candidates._id)}
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

      {filteredCandidates.length > candidatesPerPage && (
        <div className='flex justify-center mt-4'>
          <nav>
            <ul className='flex items-center'>
              {Array.from({ length: Math.ceil(filteredCandidates.length / candidatesPerPage) }).map(
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
        <CandidatesPopup
          candidates={selectedCandidates.length === 1 ? selectedCandidates[0] : null}
          onClose={handlePopupClose}
          onSave={handlePopupSave}
        />
      )}

      {isBulkUploadOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <BulkUpload onClose={handleBulkUploadClose} />
          </div>
        </div>
      )}

      {/* <div className='toast-container'> */}
        {/* Toast messages */}
        <ToastContainer position='top-right' />
   </div>

  );
}

export default CandidatesPage;
