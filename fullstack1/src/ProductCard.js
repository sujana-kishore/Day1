import React from 'react';
import Nine from './Nine';

function ProductCard() {
  return (
    <div className="product-card">
         
      <div className="product-image">
        {/* Replace with actual image */}
        <img src="/b.jpg" width={400} alt="Product Image" />
      </div>
      <div className="product-details">
    
        <h2>Product Name</h2>
        <p>
          Description Description Description Description Description Description
          Description Description Description Description Description Description
          Description
        </p>
        <p className="product-price">₹500.00</p>
      <Nine/>
      </div>
    </div>
  );
}

export default ProductCard;