import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SyncLoader } from 'react-spinners';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      if (role === 'admin') {
        navigate('/admin-panel');
      } else if (role === 'trainers') {
        navigate('/trainers-panel');
      }
    }
  }, [role, navigate]);

 const handleLogin = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await axios.post(`http://localhost:8005/api/${role}/login`, {
      email,
      password,
    });

    const token = response.data.token;
    localStorage.setItem('role', role);
    localStorage.setItem('token', JSON.stringify(token)); // Store token as a string

    setEmail('');
    setPassword('');

    if (role === 'admin') {
      navigate('/admin-panel');
    } else if (role === 'trainers') {
      navigate('/trainers-panel');
    }
  } catch (error) {
    setMessage(error.response.data.error);
    setIsLoading(false);
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
      <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 w-96 p-8 mb-20 rounded-lg">
        <h2 className="text-2xl text-white font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <h1><p>Enter your email, we'll send you a link to reset your password</p></h1>
          <div className="mb-4">
            <label htmlFor="email" className="text-white">
              Your New Password:
            </label>
            <input
              type="password"
              id="password"
              value={email}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 rounded-md py-2 px-3 mt-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-white">
              Confirm Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 rounded-md py-2 px-3 mt-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 rounded-md py-2 px-3 mt-2 w-full"
            />
          </div>
               
          <button
            type="submit"
            className="relative font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-white py-2 px-4 rounded-md w-full overflow-hidden transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-violet-700 hover:scale-110"
          >
         
            {isLoading ? (
              <SyncLoader size={10} color="#ffffff" />
            ) : (
              <>
                Send Code
                <span className="absolute top-0 right-0 h-2 w-2 bg-white rounded-full transform translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </>
            )}
          </button>


          <div className="mb-4">
            <label htmlFor="number" className="text-white">
              OTP Number:
            </label>
            <input
              type="number"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="bg-gray-200 rounded-md py-2 px-3 mt-2 w-full"
            />
          </div>

        </form>

      </div>
    </div>
  );
};

export default EmailValidation;
