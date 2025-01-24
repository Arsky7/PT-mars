import React from 'react';
import './ourProduct.css'; // Import the custom CSS for styling

function OurProducts() {
  return (
    <div>
      <div className="product-section">
        <div className="product-container">
          <img 
            src="orang.png" // Replace with your actual image URL
            alt="Our Products"
            className="product-image"
          />
          <div className="product-text">
            <h2>Explore Our Products</h2>
            <p>Here are all the details about our products. We offer a wide range of high-quality items to meet your needs.</p>
            <button className="btn-explore">Explore Now</button>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <h3>Product 1</h3>
            <p>High-quality product with amazing features to enhance your experience.</p>
            <button className="btn-card">Learn More</button>
          </div>
          <div className="card">
            <h3>Product 2</h3>
            <p>Reliable and efficient product to meet your everyday needs.</p>
            <button className="btn-card">Learn More</button>
          </div>
          <div className="card">
            <h3>Product 3</h3>
            <p>Affordable and top-notch product crafted with precision.</p>
            <button className="btn-card">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
