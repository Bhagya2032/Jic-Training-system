import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SyncLoader } from 'react-spinners';

const ForgetPwd = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('admin');
//   const [message, setMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       if (role === 'admin') {
//         navigate('/admin-panel');
//       } else if (role === 'manager') {
//         navigate('/manager-panel');
//       }
//     }
//   }, [role, navigate]);

//  const handleLogin = async (e) => {
//   e.preventDefault();
//   setIsLoading(true);

//   try {
//     const response = await axios.post(`http://localhost:8005/api/${role}/login`, {
//       email,
//       password,
//     });

//     const token = response.data.token;
//     localStorage.setItem('role', role);
//     localStorage.setItem('token', JSON.stringify(token)); // Store token as a string

//     setEmail('');
//     setPassword('');

//     if (role === 'admin') {
//       navigate('/admin-panel');
//     } else if (role === 'manager') {
//       navigate('/manager-panel');
//     }
//   } catch (error) {
//     setMessage(error.response.data.error);
//     setIsLoading(false);
//   }
// };

const handleLogin = async (e) => {}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 to-rose-400">
      <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r w-96 p-8 mb-20 rounded-lg">
        <h2 className="text-2xl text-white font-bold mb-6">If You Forget Password ?</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="text-white">
             Enter New Password:
            </label>
            <input
              type="password"
              id="email"
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 rounded-md py-2 px-3 mt-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white">
            Confirm Password:
            </label>
            <input
              type="password"
              id="email"
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 rounded-md py-2 px-3 mt-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white">
             Enter Email :
            </label>
            <input
              type="email"
              id="email"
            //   value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 rounded-md py-2 px-3 mt-2 w-full"
            />
            <button className='m-2 bg-blue-400 p-2 rounded text-white'>Send Code</button>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white">
             Verify code here:
            </label>
            <input
              type="email"
              id="email"
            //   value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 rounded-md py-2 px-3 mt-2 w-full"
            />
          </div>
          </form> 
       
      </div>
      
      
    </div>
  );
};

export default ForgetPwd;

