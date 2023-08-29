import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ForgetPwd(){
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [otp, setOTP] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      setLoading(true);
      // Call your API endpoint to update the password
      // Example: const response = await axios.post('/reset-password', { email, password });
      setMessage('Password reset successful.');
    } catch (error) {
      console.log(error);
      setMessage('Error resetting password.');
    } finally {
      setLoading(false);
    }
  };

  const sendOTP = async () => {
    try {
      const response = await axios.post('/send-otp', { email });
      setMessage(response.data);
    } catch (error) {
      console.log(error);
      setMessage('Error sending OTP.');
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await axios.post('/verify-otp', { email, otp });
      setMessage(response.data);
    } catch (error) {
      console.log(error);
      setMessage('Error verifying OTP.');
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 to-rose-400">
      <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r w-96 p-8 mb-20 rounded-lg">
        <h2 className="text-2xl text-white font-bold mb-6">If You Forget Password ?</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="password" className="text-white">
              Enter New Password:
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
            <label htmlFor="confirmPassword" className="text-white">
              Confirm Password:
            </label>
            <input
              type="password"
              id="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-gray-200 rounded-md py-2 px-3 mt-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white">
              Enter Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 rounded-md py-2 px-3 mt-2 w-full"
            />
            <button className='m-2 bg-blue-400 p-2 rounded text-white' type="button" onClick={sendOTP}>
              Send Code
            </button>
          </div>
          <div className="mb-4">
            <label htmlFor="verificationCode" className="text-white">
              Verify code here:
            </label>
            <input
              type="text"
              id="verificationCode"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              className="bg-gray-200 rounded-md py-2 px-3 mt-2 w-full"
            />
            <button className='m-2 bg-blue-400 p-2 rounded text-white' type="button" onClick={verifyOTP}>
              Verify OTP
            </button>
          </div>
          {/* <button className='m-2 bg-blue-400 p-2 rounded text-white' type="submit" disabled={loading}>
            Reset Password
          </button>
          <p className="text-white">{message}</p> */}
        </form>
      </div>
    </div>
  );
}
export default ForgetPwd;

