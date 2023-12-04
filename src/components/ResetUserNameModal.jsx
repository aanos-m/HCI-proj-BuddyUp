import React, { useState } from 'react';

const ResetUserNameModal = ({ onClose }) => {
  const [newUsername, setNewUsername] = useState('');

  const handleReset = () => {
    // Implement logic to handle the reset based on new password or username
    // For demonstration purposes, just logging the values
    console.log('New Username:', newUsername);

    // Close the modal after handling the reset logic
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
      <h5>Reset Username</h5>
      <label style={{marginBottom: '5px'}}>
        New Username:
        <input 
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
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

export default ResetUserNameModal;
