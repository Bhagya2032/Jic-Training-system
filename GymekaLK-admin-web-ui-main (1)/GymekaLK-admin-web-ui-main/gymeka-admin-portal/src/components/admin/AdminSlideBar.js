import React, { useState } from 'react';
//import Candidates from './Candidates';
import TrainerControl from './TrainerControl';
import UserPackages from './UserPackages';
import UserControl from './UserControl';
import TrainersPage from '../trainers/TrainersPage';
import TrainingPage from '../trainings/TrainingPage';
import ProgressPage from '../progress/ProgressPage';
import MilestoneTrackerPage from '../milestone tracker/MilestoneTrackerPage';
import FeedbackPage from '../feedback/FeedbackPage';
import ReportsPage from '../reports/ReportsPage';
import ProfilePage from '../profile/ProfilePage';
import AdminSettingsPage from '../admin settings/AdminSettings';
import MilestoneSetupPage from '../milestone setup/MilestoneSetup';
import CandidatesPage from './CandidatesPage';
import { FaUser, FaDumbbell, FaStoreAlt, FaUserCog, FaUserCircle, FaThList,FaRegStar,FaUserFriends,FaBlackTie} from 'react-icons/fa';

function AdminSlideBar() {
  const [currentPage, setCurrentPage] = useState('candidates');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex bg-gray-900">
      {/* slide bar */}
      <div className="w-1/6 h-screen p-4 bg-gray-800">
        <h2 className="mb-4 flex items-center font-bold text-lg text-white">
          <FaThList className="mr-2" />
          Dashboard
        </h2>
        <ul>
          <li
            className={`flex p-4 rounded-full items-center cursor-pointer text-white hover:bg-gray-700 ${
              currentPage === 'Candidates' ? 'bg-green-500 hover:bg-green-600' : ''
            }`}
            onClick={() => handlePageChange('Candidates')}
          >
            <FaBlackTie className="mr-2" />
            Candidates
          </li>
          <li
            className={`flex p-4 rounded-full items-center cursor-pointer text-white hover:bg-gray-700 ${
              currentPage === 'Trainers' ? 'bg-green-500 hover:bg-green-600' : ''
            }`}
            onClick={() => handlePageChange('Trainers')}
          >
            <FaBlackTie className="mr-2" />
            Trainers
          </li>
          <li
            className={`flex p-4 rounded-full items-center cursor-pointer text-white hover:bg-gray-700 ${
              currentPage === 'Training' ? 'bg-green-500 hover:bg-green-600' : ''
            }`}
            onClick={() => handlePageChange('Training')}
          >
            <FaBlackTie className="mr-2" />
            Trainings
          </li>
          <li
            className={`flex p-4 rounded-full items-center cursor-pointer text-white hover:bg-gray-700 ${
              currentPage === 'Progress' ? 'bg-green-500 hover:bg-green-600' : ''
            }`}
            onClick={() => handlePageChange('Progress')}
          >
            <FaBlackTie className="mr-2" />
            Progress
          </li>
          <li
            className={`flex p-4 rounded-full items-center cursor-pointer text-white hover:bg-gray-700 ${
              currentPage === 'milestonetracker' ? 'bg-green-500 hover:bg-green-600' : ''
            }`}
            onClick={() => handlePageChange('milestonetracker')}
          >
            <FaBlackTie className="mr-2" />
            Milestone Tracker
          </li>
          <li
            className={`flex p-4 rounded-full items-center cursor-pointer text-white hover:bg-gray-700 ${
              currentPage === 'feedback' ? 'bg-green-500 hover:bg-green-600' : ''
            }`}
            onClick={() => handlePageChange('feedback')}
          >
            <FaBlackTie className="mr-2" />
            Feedback
          </li>
          <li
            className={`flex p-4 rounded-full items-center cursor-pointer text-white hover:bg-gray-700 ${
              currentPage === 'reports' ? 'bg-green-500 hover:bg-green-600' : ''
            }`}
            onClick={() => handlePageChange('reports')}
          >
            <FaBlackTie className="mr-2" />
            Reports
          </li>
          <li
            className={`flex p-4 rounded-full items-center cursor-pointer text-white hover:bg-gray-700 ${
              currentPage === 'profile' ? 'bg-green-500 hover:bg-green-600' : ''
            }`}
            onClick={() => handlePageChange('profile')}
          >
            <FaBlackTie className="mr-2" />
            Profile
          </li>
          <li
            className={`flex p-4 rounded-full items-center cursor-pointer text-white hover:bg-gray-700 ${
              currentPage === 'adminsettings' ? 'bg-green-500 hover:bg-green-600' : ''
            }`}
            onClick={() => handlePageChange('adminsettings')}
          >
            <FaBlackTie className="mr-2" />
            Admin Settings
          </li>
          <li
            className={`flex p-4 rounded-full items-center cursor-pointer text-white hover:bg-gray-700 ${
              currentPage === 'milestonesetup' ? 'bg-green-500 hover:bg-green-600' : ''
            }`}
            onClick={() => handlePageChange('milestonesetup')}
          >
            <FaBlackTie className="mr-2" />
            Milestone Setup
          </li>

        </ul>
      </div>
      <div className="flex-1 p-1">
        {currentPage === 'Candidates' && <CandidatesPage />}
        {currentPage === 'Trainers' && <TrainersPage />}
        {currentPage === 'Training' && <TrainingPage />}
        {currentPage === 'Progress' && <ProgressPage />}
        {currentPage === 'milestonetracker' && <MilestoneTrackerPage />}
        {currentPage === 'feedback' && <FeedbackPage />}
        {currentPage === 'reports' && <ReportsPage />}
        {currentPage === 'profile' && <ProfilePage />}
        {currentPage === 'adminsettings' && <AdminSettingsPage />}
        {currentPage === 'milestonesetup' && <MilestoneSetupPage />}


      </div>
    </div>
  );
}

export default AdminSlideBar;
