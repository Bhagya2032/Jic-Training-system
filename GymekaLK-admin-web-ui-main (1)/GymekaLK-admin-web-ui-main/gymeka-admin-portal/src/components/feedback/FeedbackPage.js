import React, { useState, useEffect } from 'react';

const FeedbackPage = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-white min-h-screen p-4">
      <h1 className='text-2xl font-bold text-white mb-4 text-start rounded-xl p-2 bg-orange-500'>
        Feedback page</h1>
      <div className="mt-4 rounded-xl bg-gray-300 p-4 ">
        <input
          type='text'
          className='bg-gray-100 text-gray-500 py-2 px-4 rounded '
          placeholder='Search by candidates code...'
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>  

      <div className="mt-4 rounded-xl bg-gray-300 p-2">
      <div className="mt-2 rounded-xl bg-gray-400 px-3 py-3 ">
       <h2 className="text-xl font-bold">Training Name</h2>

       {/* table */}
       <div class='h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
       <table class="w-full ml-6 text-black border border-collapse">
       <th class="border p-2">Trainers Name</th>
        <th class="border p-2">Type</th>
        <th class="border p-2">Format</th>
        <th class="border p-2">Attendess</th>
        <th class="border p-2">Feedback</th>
        <th class="border p-2">Response Rate</th>
        <th class="border p-2">Zone</th>
        <th class="border p-2">Region</th>
        <th class="border p-2">Branch</th>
        <th class="border p-2">Channel</th>
        <tbody>
         <tr>
          <td class="border p-2"></td>
          <td class="border p-2"></td>
          <td class="border p-2"></td>
          <td class="border p-2"></td>
          <td class="border p-2"></td>
          <td class="border p-2"></td>
          <td class="border p-2"></td>
          <td class="border p-2"></td>
          <td class="border p-2"></td>
          <td class="border p-2"></td>
         </tr>
        </tbody>     
       </table>
       </div>
       
       <div className="flex m-3 justify-ceneter p-2">
       <div className="bg-blue-500 p-2 h-40 w-40 rounded-full mr-3">

        <h1 className="text-center mt-12  p-2 rounded-full font-bold">Trainer Rating</h1>
        </div>
        <div className="bg-blue-500 p-2 h-40 w-40 rounded-full mr-3">
        
        <h1 className="text-center mt-12  p-2 rounded-full font-bold">training Rating</h1>
        </div>
        <div className="bg-blue-500 p-2 h-40 w-40 rounded-full mr-3">
        
        <h1 className="text-center mt-12  p-2 rounded-full font-bold">Q3</h1>
        </div>
        <div className="bg-blue-500 p-2 h-40 w-40 rounded-full mr-3">
        
        <h1 className="text-center mt-12  p-2 rounded-full font-bold">Q4</h1>
        </div>
       </div>
      </div>  
      </div>  



    </div>
  );
};

export default FeedbackPage;
