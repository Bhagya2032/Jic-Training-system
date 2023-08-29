import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
//recat tostify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageProgress from './ManageProgress';

function ProgressValidationPage() {
  const [progress, setProgress] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [progressPerPage] = useState(10);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedProgress, setSelectedProgress] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      const response = await axios.get('http://localhost:8005/api/progress', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProgress(response.data.progress);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (progress) => {
    setSelectedProgress([progress]);
    setPopupOpen(true);
  };

  const handleDelete = async (progressId) => {
    try {
      await axios.delete(`http://localhost:8005/api/progress/${progressId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(`Progress deleted successfully.`);
      fetchProgress();
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleDeleteSelected = async () => {
    try {
      const progressIds = selectedProgress.map((progress) => progress._id);

      await axios.delete('http://localhost:8005/api/progress/deleteAll', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          progressIds,
        },
      });
      toast.success(`All Progress deleted successfully.`);
      fetchProgress();
      setSelectedProgress([]);
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleAddProgress = () => {
    setSelectedProgress([]);
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const handlePopupSave = async (progressData) => {
    try {
      if (selectedProgress.length > 0) {
        await Promise.all(
          selectedProgress.map(async (selectedProgress) => {
            try {
              await axios.put(
                `http://localhost:8005/api/progress/${selectedProgress._id}`,
                progressData,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
              toast.success(`Progress "${selectedProgress.progressCode}" updated successfully.`);
            } catch (error) {
              console.log(error);
              toast.error(
                `Failed to update progress "${selectedProgress.progressCode}". Please try again.`
              );
            }
          })
        );
      } else {
        await axios.post('http://localhost:8005/api/progress', progressData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success(`Progress "${progressData.progressCode}" added successfully.`);
      }
      fetchProgress();
      setPopupOpen(false);
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectProgress = (progress) => {
    if (selectedProgress.includes(progress)) {
      setSelectedProgress(selectedProgress.filter((selectedProgress) => selectedProgress !== progress));
    } else {
      setSelectedProgress([...selectedProgress, progress]);
    }
  };

  const filteredProgress = progress.filter((progress) => {
    return progress.progressCode.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const indexOfLastProgress = currentPage * progressPerPage;
  const indexOfFirstProgress = indexOfLastProgress - progressPerPage;
  const currentProgress = filteredProgress.slice(indexOfFirstProgress, indexOfLastProgress);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='bg-white min-h-screen p-2'>
      <div className='flex justify-between items-center bg-white mb-4'>
        <div className='flex items-center'>
          <Link To = "/ManageProgress">
          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 m-2 rounded flex item center'
            onClick={handleAddProgress}       >
            <FaPlus className='mr-2' /> Manage
          </button>
          </Link>
        </div>
      </div>

      {selectedProgress.length > 0 && (
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center'
          onClick={handleDeleteSelected}
        >
          <FaTrash className='mr-2' /> Delete Selected Progress
        </button>
      )}

      <div>
        <input
          type='text'
          className='bg-gray-100 text-gray-500 py-2 px-4 rounded '
          placeholder='Search by progress code...'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      {filteredProgress.length === 0 && <div className='text-white mb-4'>No progress found.</div>}

      {filteredProgress.length > 0 && (
        <table className='w-full ml-6 text-black '>
          <div class='h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
            <thead>
              <tr>
                <th className='py-2 px-4'></th>
                <th className='py-2 px-4'>Id</th>
                <th className='py-2 px-4'>Progress Name</th>
                <th className='py-2 px-4'>Mobile</th>
                <th className='py-2 px-4'>Email</th>
                <th className='py-2 px-4'>NIC</th>
                {/* <th className='py-2 px-4'>Status</th>
                <th className='py-2 px-4'>AVO</th>
                <th className='py-2 px-4'>CDS2</th>
                <th className='py-2 px-4'>CDS3</th>
                <th className='py-2 px-4'>Designation</th> */}
                <th className='py-2 px-4'></th>
              </tr>
            </thead>

            <tbody>
              {currentProgress.map((progress) => (
                <tr
                  key={progress._id}
                  className={`hover:bg-gray-100 ${
                    selectedProgress.includes(progress) ? 'bg-gray-100' : ''
                  }`}
                >
                  <td className='py-2 px-4 border'>
                    <input
                      type='checkbox'
                      checked={selectedProgress.includes(progress)}
                      onChange={() => handleSelectProgress(progress)}
                    />
                  </td>
                  <td className='py-2 px-4 border'>{progress.progressCode}</td>
                  <td className='py-2 px-4 border'>{progress.location}</td>
                  <td className='py-2 px-4 border'>{progress.openTime}</td>
                  <td className='py-2 px-4 border'>{progress.closeTime}</td>
                  <td className='py-2 px-4 border'>{progress.managerName}</td>
                  {/* <td className='py-2 px-4 border'>{progress.status}</td>
                  <td className='py-2 px-4 border'>{progress.avo}</td>
                  <td className='py-2 px-4 border'>{progress.cds2}</td>
                  <td className='py-2 px-4 border'>{progress.cds3}</td>
                  <td className='py-2 px-4 border'>{progress.designation}</td> */}
                  <td className='py-2 px-4 border'>
                    <button
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2'
                      onClick={() => handleUpdate(progress)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'
                      onClick={() => handleDelete(progress._id)}
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

      {filteredProgress.length > progressPerPage && (
        <div className='flex justify-center mt-4'>
          <nav>
            <ul className='flex items-center'>
              {Array.from({ length: Math.ceil(filteredProgress.length / progressPerPage) }).map(
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


      {/* <div className='toast-container'> */}
        {/* Toast messages */}
        <ToastContainer position='top-right' />
   </div>

  );
}

export default ProgressValidationPage;
