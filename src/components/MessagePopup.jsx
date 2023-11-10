import React, { useState } from 'react';

const MessagePopup = ({ onClose }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Handle the message sending logic here
    // You can validate and submit the message and close the popup when done.
    // For simplicity, I'll just close the popup here.
    onClose();
  };

  const popupStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(5px)', // Add the blur effect
  };

  const popupContentStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    gap: '20px', // Add a gap of 20px between elements
  };

  return (
    <div style={popupStyle}>
      <div style={popupContentStyle} className="popup-content">
        <h2>Send Message</h2>
        <textarea
          placeholder="Type your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default MessagePopup;
