import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SyncLoader } from 'react-spinners';

function LoginForm(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate(`/${role}-panel`);
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
      localStorage.setItem('token', token);

      setEmail('');
      setPassword('');

      navigate(`/${role}-panel`);
    } catch (error) {
      setMessage(error.response?.data?.error || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 to-rose-400">
      <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r w-96 p-8 mb-20 rounded-lg">
        <h2 className="text-2xl text-white font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
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
          <div className="mb-4">
            <label htmlFor="password" className="text-white">
              Password:
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
            <label htmlFor="role" className="text-white">
              Role:
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-gray-200 rounded-md py-2 px-3 mt-2 w-full"
            >
              <option value="admin">Admin</option>
              <option value="trainer">Trainer</option>
            </select>
          </div>
          <button
            type="submit"
            className="relative font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-white py-2 px-4 rounded-md w-full overflow-hidden transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-violet-700 hover:scale-110"
          >
            {isLoading ? (
              <SyncLoader size={10} color="#ffffff" />
            ) : (
              <>
                Login
                <span className="absolute top-0 right-0 h-2 w-2 bg-white rounded-full transform translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </>
            )}
          </button>
        </form>
        <Link to='/forgetpassword'>
          <h2 className='text-white mt-2'>Forget Password?</h2>
        </Link>
        {message && <p className="text-white mt-4">{message}</p>}
      </div>
     </div>
     
  );
};

export default LoginForm;
