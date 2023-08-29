import React, { useState } from 'react';

function ProfileValidation() {
  const [name, setName] = useState('');
  const [accountType, setAccount] = useState('');
  const [zone, setZone] = useState('');
  const [region, setRegion] = useState('');
  const [branch, setBranch] = useState('');
  const [channel, setChannel] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAccountChange = (event) => {
    setAccount(event.target.value);
  };

  const handleZoneChange = (event) => {
    setZone(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handleChannelChange = (event) => {
    setChannel(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handlePasswordUpdate = (event) => {
    event.preventDefault();
    // Update the password logic here
    console.log('Updated password:', newPassword);
  };

  return (
    <div className="bg-white min-h-screen p-4">
      {/* <div className="bg-gradient-to-b from-gray-900 to-white-600 bg-gradient-to-r w-96 p-8 mb-20 rounded-lg"> */}
        <h2 className="text-2xl text-black font-bold mb-6">Profile</h2>
     
      {/* <form onSubmit={handleSubmit}> */}
      <form>
      <div className="mb-4 flex items-center">
      <label className="block text-black-700 mr-2 font-bold">User Name</label>
          <input type="text" value={name} onChange={handleNameChange} 
          className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
   
        <div className="mb-4 flex items-center">
          <label className="block text-black-700 mr-2 font-bold">Change Password:</label>
          {/* <input type="password" value={newPassword} onChange={handlePasswordChange} /> */}
          <button type="button" onClick={handlePasswordUpdate}>Update Password</button>
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-black-700 mr-2 font-bold">User Account Type:</label>
          <input type="text" value={accountType} onChange={handleAccountChange} 
          className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-black-700 mr-2 font-bold">Zone:</label>
          <input type="text" value={zone} onChange={handleZoneChange} 
          className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-black-700 mr-2 font-bold">Region:</label>
          <input type="text" value={region} onChange={handleRegionChange} 
          className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-black-700 mr-2 font-bold">Branch:</label>
          <input type="text" value={branch} onChange={handleBranchChange} 
          className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div>
          <label className="block text-black-700 mr-2 font-bold">Channel:</label>
          <input type="text" value={channel} onChange={handleChannelChange} 
          className="block w-full border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        
      </form>
    </div>
    // </div>
  );
};

export default ProfileValidation;
