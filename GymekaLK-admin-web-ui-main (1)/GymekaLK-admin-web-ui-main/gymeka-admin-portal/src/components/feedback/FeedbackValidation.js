import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FeedbackValidation() {
  const [trainings, setTrainings] = useState([]);
  const [selectedTraining, setSelectedTraining] = useState(null);

  useEffect(() => {
    // Fetch training data from your API
    axios.get('/api/trainings') // Update with your API endpoint
      .then(response => {
        setTrainings(response.data);
      })
      .catch(error => {
        console.error('Error fetching training data:', error);
      });
  }, []);

  const TrainingTable = ({ trainings, onTrainingClick }) => {
    return (
      <div>
        <h2>Training Name</h2>
        <table className='w-full ml-6 text-black '>
          <div class='h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
            <thead>
            <tr>
              <th>Trainer Rating</th>
              <th>Training Rating</th>
              <th>Sample Question 3</th>
              <th>Sample Question 4</th>
              <th>Average Assessment Mark</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map(training => (
              <tr key={training.id} onClick={() => onTrainingClick(training)}>
                <td>{training.trainerRating}</td>
                <td>{training.trainingRating}</td>
                <td>{training.sampleQuestion3}</td>
                <td>{training.sampleQuestion4}</td>
                <td>{training.avgAssessmentMark}</td>
              </tr>
            ))}
          </tbody>
          </div>
        </table>
        <TrainingTable trainings={trainings} onTrainingClick={handleTrainingClick} />
        {selectedTraining && <TrainingDetails training={selectedTraining} />}
      </div>
    );
  };

  const TrainingDetails = ({ training }) => {
    return (
      
      <div className='flex justify-between items-center bg-white mb-4'>
        <p>Trainer Rating: {training.trainerRating}</p>
        <p>Training Rating: {training.trainingRating}</p>
        <p>Sample Question 3: {training.sampleQuestion3}</p>
        <p>Sample Question 4: {training.sampleQuestion4}</p>
        <p>Average Assessment Mark: {training.avgAssessmentMark}</p>
      </div>
     
    );
  };

  const handleTrainingClick = (training) => {
    setSelectedTraining(training);
  };
};

export default FeedbackValidation;

//   return (
//     <div className='bg-white min-h-screen p-2'>
//       <div className='flex justify-between items-center bg-white mb-4'>
//       <h1>Feedback Page</h1>
//       <TrainingTable trainings={trainings} onTrainingClick={handleTrainingClick} />
//       {selectedTraining && <TrainingDetails training={selectedTraining} />}
//     </div>
//     </div>
//   );
// }
