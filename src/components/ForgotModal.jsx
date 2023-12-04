// ForgotPasswordModal.js

import React, { useState } from 'react';
import ResetPasswordModal from './ResetPasswordModal';
import ResetUserNameModal from './ResetUserNameModal';

const ForgotModal = ({ onClose, onResetPassword }) => {
  const [forgotOption, setForgotOption] = useState(null);
  const [resetModalType, setResetModalType] = useState(null);

  const handleResetPassword = () => {
    if (forgotOption === 'username' || forgotOption === 'password') {
      setResetModalType(forgotOption);
    } else {
      onResetPassword(forgotOption);
      onClose();
    }
  };

  const closeResetModal = () => {
    setResetModalType(null);
    onClose();
  };

  return (
    <div
      style={{
        padding: '20px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h5>Forgot Username or Password?</h5>
      <p>Please select what you forgot:</p>
      <div>
        <label>
          <input
            type="radio"
            name="forgotOption"
            value="username"
            onChange={() => setForgotOption('username')}
          />
          Forgot Username
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="forgotOption"
            value="password"
            onChange={() => setForgotOption('password')}
          />
          Forgot Password
        </label>
      </div>
      <button onClick={handleResetPassword}
        style={{
          cursor: 'pointer',
          background: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 12px',
          marginRight: '10px',
          marginBottom: '10px'
        }}
        
      >
        Reset
      </button>
      <button onClick={onClose}
        style={{
          cursor: 'pointer',
          background: '#ccc',
          color: '#000',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 12px',
          marginRight: '10px',
          marginBottom: '10px'
        }}
       
      >
        Cancel
      </button>

      {/* Conditionally render the appropriate Reset modal */}
      {resetModalType === 'username' && (
        <ResetUserNameModal onClose={closeResetModal} />
      )}
      {resetModalType === 'password' && (
        <ResetPasswordModal onClose={closeResetModal} />
      )}
    </div>
  );
};

export default ForgotModal;
