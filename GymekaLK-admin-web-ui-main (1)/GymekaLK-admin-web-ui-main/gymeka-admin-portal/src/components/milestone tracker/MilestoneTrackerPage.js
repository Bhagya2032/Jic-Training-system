import React from "react";
import MilestoneTrackerValidation from "./MilestoneTrackerValidation"; // Import your MilestoneTrackerValidation component

const MilestoneTrackerPage = () => {
  return (
    <div class="bg-white min-h-screen p-4">
      <h1 className='text-2xl font-bold text-white mb-4 text-start rounded-xl p-2 bg-orange-500'>
        Milestone Tracker Page</h1>
        <div class='h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
      <label>Name:</label>
      <div className="slider-container">
        <div className="slider-item mt-7">
          <MilestoneTrackerValidation />
        </div>
        <div className="slider-item mt-10">
          <MilestoneTrackerValidation />
        </div>
        </div>
        
        <div class='h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
        <label>Name:</label>
        <div className="slider-item mt-7">
          <MilestoneTrackerValidation />
        </div>
        <div className="slider-item mt-20">
          <MilestoneTrackerValidation />
        </div>
      </div>
    </div>
    </div>
  );
};

export default MilestoneTrackerPage;
