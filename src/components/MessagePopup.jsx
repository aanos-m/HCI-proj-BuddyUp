import React, { useState } from 'react';

const MessagePopup = ({ onClose }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    alert('Message Sent')
    onClose();
  };

  const popupStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.3)', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(5px)', 
  };

  const popupContentStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px', 
  };

  return (
    <div style={popupStyle}>
      <div style={popupContentStyle} className="popup-content">
        <h2>Send Message</h2>
        <textarea
          placeholder="Subject"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
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
