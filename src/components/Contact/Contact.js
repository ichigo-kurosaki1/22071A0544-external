// Contact.jsx
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>We're Here for You</h2>
      <form className="contactForm">
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />

        <label>Enter your concern:</label>
        <textarea type="text" placeholder="Type your message here"></textarea>

        <button type="submit">Submit</button>
      </form>

      <div className="contact-details">
        <p>Contact Details:</p>
        <p>Email: 22071A0544@gmail.com</p>
        <p>Phone: 9999999999</p>
      </div>
    </div>
  );
}

export default Contact;
