import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
//recat tostify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MilestoneSetup() {
    const [branches, setBranches] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [branchesPerPage] = useState(10);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [selectedBranches, setSelectedBranches] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    return (

        <div className='mt-4 mx-8'>
            <table className="table-auto w-full border">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border bg-blue-500 text-white py-2 px-4 rounded">Milestone</th>
                        <tbody>  <tr> <td className="border px-4 py-2 bg-blue-500 text-white py-2 px-4 rounded">Data 1</td>
                            <td className="border px-4 py-2bg-blue-500 text-white py-2 px-4 rounded">Data 2</td>
                            <td className="border px-4 py-2 bg-blue-500 text-white py-2 px-4 rounded">Data 3</td>
                            <td className="border px-4 py-2 bg-blue-500 text-white py-2 px-4 rounded">Data 4</td>
                            <td className="border px-4 py-2 bg-blue-500 text-white py-2 px-4 rounded">Data 5</td></tr></tbody>
                        <th className="px-4 py-2 border bg-blue-500 text-white py-2 px-4 rounded">Points</th>
                        <th className="px-4 py-2 border bg-blue-500 text-white py-2 px-4 rounded">Activity</th>
                        <th className="px-4 py-2 border bg-blue-500 text-white py-2 px-4 rounded">Total</th>
                    </tr>
                </thead>




            </table>
        </div>



    );
}


export default MilestoneSetup;