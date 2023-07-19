import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/root/Navbar";
import Homepage from "./components/home/Homepage";
import LoginForm from "./components/home/LoginForm";
import AdminPanel from "./components/admin/AdminPanel";
import Emailpage from "./components/admin/EmailPage";
import ForgetPwd from "./components/home/ForgetPwd";
import FileUpload from "./components/admin/popupbox/BulkUpload";
import TrainersPage from "./components/trainers/TrainersPage";
import CandidatesPage from "./components/admin/CandidatesPage";
import TrainingPage from "./components/trainings/TrainingPage";
import ProgressPage from "./components/progress/ProgressPage";
import ManageProgress from "./components/progress/ManageProgress";

// import About from "./components/home/About";
// import Contact from "./components/home/Contact";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        {/* <Route path="/trainers-panel" element={<TrainersPanel />} /> */}
        <Route path="/email" element={<Emailpage />} />
        <Route path="/forgetpassword" element={<ForgetPwd/>} />
        <Route path="/fileupload" element={<FileUpload/>} />
        <Route path="/trainers" element={<TrainersPage/>} />
        <Route path="/candidates" element={<CandidatesPage/>} />
        <Route path="/trainings" element={<TrainingPage/>} />
        <Route path="/progress" element={<ProgressPage/>} />
        <Route path="/manage" element={<ManageProgress/>} />


        {/* <Route path="/about" element={<About />} />
        <Route path="/conatct" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};


export default App;
