import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function BulkUpload({ onClose }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Perform actions with the selected file
      console.log('File selected:', selectedFile);
    } else {
      console.log('No file selected.');
    }

  const formData = new FormData();
  formData.append('csvFile', selectedFile);

  fetch('/fileupload', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
      // Handle success or display a success message to the user
    })
    .catch((error) => {
      console.error('Error uploading file:', error);
      // Handle error or display an error message to the user
    });
  };

const handleDownload = () => {
    const csvData = 'branchCode,location,openTime,closeTime,managerName';

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.csv';
    link.click();
    URL.revokeObjectURL(url);
    // Perform actions to download the CSV file format
    console.log('Download CSV');
};

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center min-h-screen w-full bg-gray-800 bg-opacity-50">
      <div className="bg-white w-1/2 p-4 rounded-xl">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Bulk Upload</h2>
          <button className="text-gray-600" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="border rounded py-2 px-4 mb-4"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload
        </button>
        <button
          onClick={handleDownload}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Download CSV Format
        </button>
      </div>
      
    </div>
  );
}

export default BulkUpload;
