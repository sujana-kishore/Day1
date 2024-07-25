import React, { useState } from 'react';
import Ten from './Ten';
import Nine from './Nine';

function Assignment2() {
  const [reviews, setReviews] = useState([
    // { reviewerName: 'Reviewer name', review: 'This product is good.' },
    // { reviewerName: 'Reviewer name', review: 'This product is not great.' },
  ]);

  const [newReview, setNewReview] = useState('');
  const [cart, setCart] = useState(false);

  const handleSubmitReview = (event) => {
    event.preventDefault();
    setReviews([...reviews, { reviewerName: '', review: newReview }]);
    setNewReview('');
  };

  const handleAddToCart = () => {
    setCart(true);
  };

  return (
    <div className="product-details">
        <h1>ProductName</h1>
      <style>
        {`
          .product-image-and-info {
            display: flex;
            justify-content: space-between;
          }

          .product-image {
            width: 40%;
          }

          .product-info {
            width: 70%;
            padding-left: 20px;
          }
        `}
      </style>
      <div className="product-image-and-info">
        <div className="product-image">
          <img src="/b.jpg" width={400} alt="Product Image" />
        </div>
        <div className="product-info">
          <h2>ProductName</h2>
          <p>Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
          <p>₹500.00</p>
          <Nine />
          <button onClick={handleAddToCart}>{cart ? 'Added to Cart' : 'Add to Cart'}</button>
        </div>
      </div>
      <div className="product-specs">
        <h3>Product specifications</h3>
        <p>Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
      </div>
      <div className="product-reviews">
        <h3>Reviews</h3>
        <Ten />
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <h4>{review.reviewerName}</h4>
              <p>{review.review}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Assignment2;