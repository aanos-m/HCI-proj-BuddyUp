import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
const GroupSessionNotification = ( {groupSession, onClose} ) => {

  const handleClose = () => {
    onClose(); // Close the notification popup
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)', // Adjust the blur value for a darker effect
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value for darkness
        zIndex: 999, // Adjust the z-index as needed
        flexDirection: 'column',
        overflowY: 'scroll'
      }}
      >
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '20px',
        maxHeight: '80vh', // Set a maximum height
        overflowY: 'auto', // Enable vertical scrolling if content exceeds max height
        display: 'flex',
        flexDirection: 'column',
      }}
      > 
      Subject: {groupSession.subject} <br/> 
      Location: {groupSession.location} <br/> 
      Description: {groupSession.description}
      </div>
      <button
        onClick={handleClose}
        style={{
          alignItems: 'center',
          color: 'white',
          backgroundColor: '#e22f22',
          borderRadius: '15px',
          boxShadow: '0px 4px 4px #00000040',
          display: 'flex',
          gap: '10px',
          height: '40px',
          justifyContent: 'center',
          left: '110px',
          padding: '20px',
          margin: '10px',
          top: '620px',
          border: 'none',
          fontWeight: '400',
          width: 'auto',
        }}
      >
        Close <CloseIcon />
      </button>
    </div>    
  )
}

export default GroupSessionNotification
