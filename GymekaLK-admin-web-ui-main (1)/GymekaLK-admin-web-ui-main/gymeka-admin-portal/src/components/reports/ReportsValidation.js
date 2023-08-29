import React from 'react';
import { Link } from 'react-router-dom';

function ReportsValidation(){
  const handleDownload = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='bg-white min-h-screen p-2'>
      {/* <h2 className="text-2xl text-white font-bold mb-6">Reports Page</h2> */}
      <div>
      <Link to="#" onClick={() => handleDownload('https://example.com/report1.pdf', 'Report 1.pdf')}>
        1 Candidate Report
      </Link>
      </div>
      <div>
      <Link to="#" onClick={() => handleDownload('https://example.com/report2.pdf', 'Report 2.pdf')}>
        2 Trainings Report
      </Link>
      </div>
      <div>
      <Link to="#" onClick={() => handleDownload('https://example.com/report3.pdf', 'Report 3.pdf')}>
        3 Feedback Report
      </Link>
      </div>
      <div>
      <Link to="#" onClick={() => handleDownload('https://example.com/report4.pdf', 'Report 4.pdf')}>
        4 User Report
      </Link>
      </div>
      <div>
      <Link to="#" onClick={() => handleDownload('https://example.com/report5.pdf', 'Report 5.pdf')}>
        5 Profile Report
      </Link>
      </div>
    </div>
    // </div>
  );
};

export default ReportsValidation;
