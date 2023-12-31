import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
//recat tostify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormControlLabel, RadioGroup, Radio } from '@mui/material';


function MilestoneSetup() {
    const [candidates, setCandidates] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [candidatesPerPage] = useState(10);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [selectedCandidates, setSelectedCandidates] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [cellValue, setCellValue] = useState('Initial Value'); // Initialize with the initial value
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        setSelectedCandidates(true);
      };

      const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

    return (

<div className='mt-4 mx-8 bg-gray-300'>
 {/* radio */}
 <div className='flex justify-center bg-gray-300 mx-8'>

 <RadioGroup
   row
   aria-labelledby="demo-row-radio-buttons-group-label"
   name="row-radio-buttons-group"
 >

   <FormControlLabel value="project100" control={<Radio />} label="project 100" />
   <FormControlLabel value="project200" control={<Radio />} label="project 200" />
   
 </RadioGroup>

</div>

<table className="table-auto w-full text-white border bg-black-500">
  <thead>
    <tr>
      <th className="px-4 py-2 border bg-blue-500 text-black py-2 px-4 rounded">Milestone</th>
      <th className="px-4 py-2 border bg-blue-500 text-black py-2 px-4 rounded">Points</th>
      <th className="px-4 py-2 border bg-blue-500 text-black py-2 px-4 rounded">Activity</th>
      <th className="px-4 py-2 border bg-blue-500 text-black py-2 px-4 rounded">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-4 py-2 border bg-white-500 text-black py-2 px-4 rounded">Qualifying prospects</td>
      <td className="border px-4 py-2">
      <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
       </td>

      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2"></td>
    </tr>
    <tr>
      <td className="px-4 py-2 border bg-white-500 text-black py-2 px-4 rounded">Appointment</td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2"></td>
    </tr>
    <tr>
      <td className="px-4 py-2 border bg-white-500 text-black py-2 px-4 rounded">Financial need analysis with supervisor</td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2"></td>
    </tr>
    <tr>
      <td className="px-4 py-2 border bg-white-500 text-black py-2 px-4 rounded">Regular quotation/Final presentation</td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2"></td>
    </tr>
    <tr>
      <td className="px-4 py-2 border bg-white-500 text-black py-2 px-4 rounded">Closing with the supervisor</td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2"></td>
      <td className="border px-4 py-2"></td>
    </tr>
  </tbody>
</table>

            <div className="flex justify-between bg-white p-8">
        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 m-2 rounded flex item center'
          onClick={handleSubmit}
        >
          <FaPlus className='mr-2' /> Submit
        </button>

      </div>
    </div>
        

    );
}


export default MilestoneSetup;

