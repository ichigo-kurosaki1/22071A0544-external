import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">

      <h1>About Us</h1>
      <h2>Welcome to Ecommerce website by srinath(22071A0544) store</h2>
      <div className="catalog">
        
        
        <h2>Our Top Phones</h2>
        <div className="phone-catalog">
          <div className="phone-item">
            <img src="https://d2xamzlzrdbdbn.cloudfront.net/products/29670d9b-16c0-419a-83e1-72b0d90537e724181113_416x416.jpg" alt="Phone 1" />
            <p>samsung s24 ultra</p>
          </div>
          <div className="phone-item">
            <img src="https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UF1000,1000_QL80_.jpg" alt="Phone 2" />
            <p>Iphonne 15 pro max</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
