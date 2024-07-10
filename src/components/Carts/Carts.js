// Carts.jsx
import React from 'react';
import './Carts.css';

const Carts = () => {
  return (
    <div className="list-of-items">
      <div className="item">
        <h3>Samsung s24 Ultra</h3>
        <img src="https://m.media-amazon.com/images/I/81vxWpPpgNL._AC_UF1000,1000_QL80_.jpg" alt="Television" />
        <p>Price: Rs.130,000</p>
        <button>Remove from cart</button>
      </div>
      <div className="item">
        <h3>Iphone 15 Pro Max</h3>
        <img src="https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UF1000,1000_QL80_.jpg" alt="Xiaomi 12 Pro 5G" />
        <p>Price: Rs.150,000</p>
        <button>Remove from cart</button>
      </div>

      <div className="place-order">
        <button className="place-order-btn">Place Order</button>
      </div>
    </div>
  );
};

export default Carts;
