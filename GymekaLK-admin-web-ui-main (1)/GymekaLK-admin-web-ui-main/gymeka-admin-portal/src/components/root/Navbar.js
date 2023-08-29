import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assests/jlogo.jpg';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import axios from 'axios';

const Navbar = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem('role');

    const handleLogout = async () => {
        try {
            if (role === 'admin') {
                await axios.post('http://localhost:8005/api/admin/logout');
            } else if (role === 'trainer') {
                await axios.post('http://localhost:8005/api/trainer/logout');
            }

            localStorage.removeItem('role');
            localStorage.removeItem('token');
            navigate('/login');
        } catch (error) {
            console.error('Logout Error:', error);
        }
    };
    return (
        <nav className='bg-gray-900'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-20'>
                    <div className='flex-shrink-0 flex items-center'>
                        {/* <img className='h-30 w-40 mr-1 p-1' src={logo} alt='Logo' /> */}
                        <span className='bg-gradient-to-r from-blue-400 to-emerald-400 text-black py-2 px-3 rounded-lg text-m font-semibold'>
                            Janashakthi Training Management System
                        </span>
                    </div>
                    <div className='flex'>
                        <Link to='/' className='text-white hover:text-emerald-300 px-2 py-3 rounded-md text-sm font-semibold'>
                            Home
                        </Link>
                        </div>
                    <div className='flex'>
                        {role && (
                            <>
                                {role === 'admin' && (
                                    <Link to='/admin-panel' className='text-white hover:text-emerald-300 px-3 py-2 rounded-md text-sm font-semibold'>
                                        Admin Panel
                                    </Link>
                                )}
                                {role === 'trainer' && (
                                    <Link to='/trainer-panel' className='text-white hover:text-emerald-300 px-3 py-2 rounded-md text-sm font-semibold'>
                                        Trainer Panel
                                    </Link>
                                )}
                                <button
                                    className='bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-3 py-2 mr-3 rounded-md text-sm font-semibold'
                                    onClick={handleLogout}
                                >
                                      <FaSignOutAlt className="inline mr-1" />
                                    Logout
                                </button>
                            </>
                        )}
                        {!role && (
                            <Link to='/login'>
                                <button
                                    className='bg-gradient-to-r from-rose-700 to-pink-600 text-white px-3 py-2 mr-3 rounded-md text-sm font-semibold hover:from-pink-600 hover:to-pink-700'
                                >
                                      <FaSignInAlt className="inline mr-1" />
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


