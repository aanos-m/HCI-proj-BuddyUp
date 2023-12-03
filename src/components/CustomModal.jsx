// CustomModal.jsx
import React from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, onRequestClose, modals }) => {
  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '300px',
        height: '360px',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column', // Arrange items in a column
        alignItems: 'center', // Align items to the start
        
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={modalStyle} contentLabel="Custom Alert">
      {modals.map((modal, index) => (
        <div key={index} 
        style={{ margin: '20px', display: 'flex', 
                justifyContent: 'center' 
                }}>
          <div
            style={{
              width: '25px',
              height: '25px',
              backgroundColor: modal.color,
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '10px',
            }}
          ></div>
          {modal.text}
        </div>
      ))}
      <span  style={{ margin: '20px', justifyContent: 'center', fontWeight: '500'
                }}> Click on Message Icon to send a message </span>
      <button onClick={onRequestClose} style={{
        borderRadius: '10px',
        width: '70px',
        height: '30px',
        color: 'white',
        backgroundColor: 'blue',
        outline: 'none',
        border: 'none',
        borderBottom: '1px solid #000'
      }}>Close</button>
    </Modal>
  );
};

export default CustomModal;
