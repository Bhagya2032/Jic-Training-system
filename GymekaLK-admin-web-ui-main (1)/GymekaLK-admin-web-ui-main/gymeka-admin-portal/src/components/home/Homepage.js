import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import banner from '../../assests/web-banner.jpeg';
import { FaUserCog, FaClipboardList, FaDumbbell, FaUsersCog } from 'react-icons/fa';

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 ">
        <div className="text-center">
          <SyncLoader size={10} color="#00ff9f" />
          <p className='text-green-400 text-md mt-2'>Loading...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="flex flex-col min-h-screen">

     
    </div>
  );
};

export default Homepage;
