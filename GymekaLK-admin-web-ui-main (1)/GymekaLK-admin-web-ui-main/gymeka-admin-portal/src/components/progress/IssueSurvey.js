import React, { useState } from 'react';

const IssueSurvey = () => {
  const [rating, setRating] = useState(0); // Initial rating is 0

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <p>Rating: {rating} {rating === 1 ? 'smiley' : 'smileys'}</p>
      <div>
        {[1, 2, 3, 4, 5].map((smiley) => (
          <span
            key={smiley}
            onClick={() => handleRatingClick(smiley)}
            style={{
              cursor: 'pointer',
              fontSize: '24px',
              marginRight: '5px',
              color: smiley <= rating ? 'gold' : 'gray',
            }}
          >
            {smiley === 1 ? '😃' : '😄'} {/* Use smiley emojis */}
          </span>
        ))}
      </div>
    </div>
  );
};

export default IssueSurvey;
