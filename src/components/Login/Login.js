import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>

    <form className="loginForm">
      <label>
        Username
        <input type="text" />
      </label>
      <label>
        Email
        <input type="email" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <button>Login</button>
    </form>
    </div>
  );
}

export default Login;
