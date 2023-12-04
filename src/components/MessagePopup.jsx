import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const MessagePopup = ({ onClose }) => {
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSend = () => {
    if (message.trim() === '') {
      alert('Please enter a non-empty message before sending.');
    } else {
      alert('Message Sent');
      onClose();
    }
  };

  const handleCancel = () => {
    // navigate('/ReturnUser/Friends');
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
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center', alignContent: 'center'}} >
         <h2>Send Message</h2> 
         <CloseIcon onClick={onClose}/>
        </div>
        <input placeholder="Subject" />
        <textarea
          placeholder="Type your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default MessagePopup;
