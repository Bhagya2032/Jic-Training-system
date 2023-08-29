import React from 'react';
import ReportsValidation from './ReportsValidation';

function ReportsPage(){
  const reports = [
    { url: 'https://example.com/report1.pdf', filename: 'Report 1.pdf' },
    { url: 'https://example.com/report2.pdf', filename: 'Report 2.pdf' },
    { url: 'https://example.com/report3.pdf', filename: 'Report 3.pdf' },
    { url: 'https://example.com/report4.pdf', filename: 'Report 4.pdf' },
    { url: 'https://example.com/report5.pdf', filename: 'Report 5.pdf' },
  ];

  return (
    <div className="bg-white min-h-screen p-4">
      <h1 className='text-2xl font-bold text-white mb-4 text-start rounded-xl p-2 bg-orange-500'>
        Reports page</h1>
      <p>This is the report page content.</p>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>
            <ReportsValidation url={report.url} filename={report.filename} />
          </li>
        ))}
      </ul>
    </div>
    // </div>
  );
};

export default ReportsPage;
