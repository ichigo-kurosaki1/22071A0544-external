import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="register-container">
      <h2>Register</h2>
    <form className="registerForm">
      <div className="form-group">
        <label>Username
          <input type="text" name="username" required />
        </label>
      </div>
      <div className="form-group">
        <label>Email
          <input type="email" name="email" required />
        </label>
      </div>
      <div className="form-group">
        <label>Password
          <input type="password" name="password" required />
        </label>
      </div>
      <div className="form-group">
        <label>Confirm password
          <input type="text" name="address" required />
        </label>
      </div>
      <div className="form-group">
        <label>Full name
          <input type="text" name="college" required />
        </label>
      </div>
      <div className="form-group">
        <label>Date of Birth
          <input type="text" name="branch" required />
        </label>
      </div>
      <div className="form-group">
        <label>Gender
          <input type="text" name="section" required />
        </label>
      </div>
      <div className="form-group">
        <label>Interests
          <input type="text" name="year" required />
        </label>
      </div>
      <div className="form-group">
        <label>Phone No.  
          <input type="text" name="company" required />
        </label>
      </div>
      
      <div className="form-group">
        <label>Address
          <input type="text" name="city" required />
        </label>
      </div>
      <div className="form-group">
        <label>State
          <input type="text" name="state" required />
        </label>
      </div>
      <div className="form-group">
        <label>Pin code
          <input type="text" name="pincode" required />
        </label>
      </div>
      <div className="form-group">
        <label>Country
          <input type="text" name="country" required />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Register;
