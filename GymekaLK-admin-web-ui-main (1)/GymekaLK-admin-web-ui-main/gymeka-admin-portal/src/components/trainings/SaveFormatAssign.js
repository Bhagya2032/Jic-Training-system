import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';


function SaveFormatAssign({ isOpen, onClose, onSave }) {

  const [selectedTrainings, setSelectedTrainings] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const saveFormat = () => {
    setSelectedTrainings([]);
    setPopupOpen(true);
  };

  const assign = () => {
    setSelectedTrainings([]);
    setPopupOpen(true);
  };


  // function Tooltip({ id, text, children }) {
  //   return (
  //     <>
  //       <div data-tip={text}>{children}</div>
  //       <ReactTooltip id={id} place="top" effect="solid" />
  //     </>
  //   );
  // }
  


  return (
    <div className="fixed top-0 left-0 flex items-center justify-center min-h-screen w-full bg-gray-800 bg-opacity-50">
      <div className="bg-white w-1/2 p-4 rounded-xl">
        {/* Rest of the component */}
        <div className="w-full h-full bg-gray-200 p-4">
          <label htmlFor="name">Assessment Name</label>
          {/* Other input elements */}
        </div>

        {/* <div className="w-full h-full bg-gray-200 p-4">
          <Tooltip id="example-tooltip" text="This is a tooltip">
            <button>Show Tooltip</button>
          </Tooltip>
        </div> */}

        <div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 m-2 rounded flex items-center"
            onClick={saveFormat}
          >
            <FaPlus className="mr-2" /> Save Format
          </button>

          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 m-2 rounded flex items-center"
            onClick={assign}
          >
            <FaPlus className="mr-2" /> Assign
          </button>
        </div>
      </div>
    </div>
  );
}

export default SaveFormatAssign;
