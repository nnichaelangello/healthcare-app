import React, { useState } from 'react';

function Reviews() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    if (rating && comment) setSubmitted(true);
  };
  return (
    <div>
      <h2>Reviews</h2>
      {!submitted ? (
        <>
          <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating (1-5)" />
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Comment" />
          <button disabled={!rating || !comment} onClick={handleSubmit}>Submit Review</button>
        </>
      ) : (
        <p>Review Submitted!</p>
      )}
    </div>
  );
}

export default Reviews;