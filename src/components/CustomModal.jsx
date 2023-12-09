// CustomModal.jsx
import React from 'react';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';


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
      <span  style={{ margin: '20px', justifyContent: 'center', fontWeight: '500'}}> 
        Click on Message icon to send a message 
      </span>
      <span  style={{ margin: '20px', justifyContent: 'center', fontWeight: '500'}}>
        Make a Group Session in the Search tab and see it pop up
        once the red bell icon is clicked
      </span>
      <span  style={{ margin: '20px', justifyContent: 'center', fontWeight: '500'}}>
      Currently unadd friend causes a crash, so it will be fixed and added in future implementation
      </span>
      
      <button onClick={onRequestClose} 
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
      }}>
        Close <CloseIcon /></button>
    </Modal>
  );
};

export default CustomModal;
