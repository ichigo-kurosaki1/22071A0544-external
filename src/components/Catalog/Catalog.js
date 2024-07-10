// Catalog.jsx
import React from 'react';
import './Catalog.css';

const Catalog = () => {
  return (
    <div className="catalog-items">
      <div className="catalog-item">
        <h3>Samsung s24 ultra</h3>
        <img src="https://m.media-amazon.com/images/I/81vxWpPpgNL._AC_UF1000,1000_QL80_.jpg" alt="Television" />
        <p>Price: Rs.130,000</p>
        <button>Add to cart</button>
      </div>
      <div className="catalog-item">
        <h3>iphone 15pro max</h3>
        <img src="https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UF1000,1000_QL80_.jpg" alt="Mobile" />
        <p>Price: Rs.150,000</p>
        <button>Add to cart</button>
      </div>
      <div className="catalog-item">
        <h3>vivo v60 pro</h3>
        <img src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1615983260708/737433d29eaef282e39c96d736bdc627.png" alt="Washing Machine" />
        <p>Price: Rs.50,000</p>
        <button>Add to cart</button>
      </div>
      <div className="catalog-item">
        <h3>nothing</h3>
        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/i/s/b/-original-imagrdefh2xgenzz.jpeg?q=20&crop=false" alt="Geyser" />
        <p>Price: Rs.40,000</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Catalog;
