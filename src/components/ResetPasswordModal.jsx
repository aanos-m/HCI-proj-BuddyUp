import React, { useState } from 'react';

const ResetPasswordModal = ({ onClose }) => {
  const [newPassword, setNewPassword] = useState('');

  const handleReset = () => {
      newPassword.length === 0 ? alert(`Cannot have an empty field`) : onClose();
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
      <h5>Reset Password</h5>
      <label style={{marginBottom: '5px'}}>
        New Password:
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{marginLeft: '5px'}}
        />
      </label>
      <br />
      <button
        style={{
          cursor: 'pointer',
          background: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 12px',
          marginRight: '8px',
        }}
        onClick={handleReset}
      >
        Confirm Reset
      </button>
      <button
        style={{
          cursor: 'pointer',
          background: '#ccc',
          color: '#000',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 12px',
        }}
        onClick={onClose}
      >
        Cancel
      </button>
    </div>
  );
};

export default ResetPasswordModal;
