import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="app-container">
      <div className="login-box">
        <div className="moving-border"></div>
        <h2 className="login-title">Login</h2>
        <form>
          <div className="mb-4">
            <label className="text-white block mb-1">Email</label>
            <div className="input-field-wrapper">
              <FontAwesomeIcon icon={faEnvelope} className="text-white mr-2" />
              <input
                type="email"
                className="input-field"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="text-white block mb-1">Password</label>
            <div className="input-field-wrapper">
              <FontAwesomeIcon icon={faLock} className="text-white mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                className="input-field"
                placeholder="Enter your password"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="text-white ml-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <label className="checkbox-label">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="register-link">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="text-center text-white mt-4">
          Don't have an account? <a href="#" className="register-link">Register</a>
        </p>
      </div>
    </div>
  );
};

export default App;
