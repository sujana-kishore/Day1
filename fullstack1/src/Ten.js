import React, { useState } from 'react';

function Ten() {
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const inputValueChange = (event) => {
    setReview(event.target.value);
  };

  const addReview = () => {
    console.log('Added Review');
   
    const newReview = {
        customer: 'Customer ' + (reviews.length + 1),
        text: review,
      };
    setReviews([...reviews, newReview]);
    setReview('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your review"
        onChange={inputValueChange}
        value={review}
      />
      <button type="button" className="btn btn-primary" onClick={addReview}>
        Add Review
      </button>
      <ul type="none">
        {reviews.map((rev, index) => (
          <li key={index}>
            <strong>{rev.customer}:</strong>
            <p>{rev.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ten;


