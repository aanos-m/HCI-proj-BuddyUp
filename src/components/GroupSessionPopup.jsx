import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ClearIcon from '@mui/icons-material/Clear';


const GroupSessionPopup = ({ onClose, onSelect, options, groupSession, setGroupSession  }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [subject, setSubject] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleCheckboxChange = (value) => {
    const updatedSelection = selectedOptions.includes(value)
      ? selectedOptions.filter((selected) => selected !== value)
      : [...selectedOptions, value];
    setSelectedOptions(updatedSelection);
  };

  const handleDoneClick = () => {
    const newGroupSession = {
      subject: subject.trim(),
      location: location.trim(),
      description: description.trim(),
    };

    // Check if subject, location, and description are empty and no checkboxes are selected
    if (!newGroupSession.subject && !newGroupSession.location && !newGroupSession.description && selectedOptions.length === 0) {
      alert('Cannot schedule an empty group session.\n'
            + 'Please provide subject, location, description, and select at least one option.'
      );
      return;
    }

    alert('Group Session has been made!');
    onSelect({
      ...newGroupSession,
      // Include additional properties from options if needed
    });
    setGroupSession(newGroupSession);
    onClose();
  };

  const handleClose = () => {
    alert('Group Session cancelled!')
    onClose();
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
          flexDirection: 'column'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: 'auto', height: '250px', overflowY: 'scroll'  }}>
          {options.map((option) => (
            <div key={option.name} style={{ marginBottom: '10px', }}>
              <input
                type="checkbox"
                id={option.name}
                value={option.name}
                checked={selectedOptions.includes(option.name)}
                onChange={() => handleCheckboxChange(option.name)}
              />
              <label htmlFor={option.name} style={{ marginLeft: '5px' }}>
                {option.name}
              </label>
            </div>
          ))}
          
        </div>
          <input 
            placeholder="Subject" 
            style={{ margin: '5px' }} 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
           />
           <input 
            placeholder="Location" 
            style={{ margin: '5px' }} 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
           />
          <textarea 
            placeholder="Description" 
            style={{ margin: '5px' }} 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
             />
        <button
          onClick={handleDoneClick}
          style={{
            backgroundColor: '#2364E3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            margin: '10px',
            cursor: 'pointer',
          }}
        >
          Done <ArrowForwardIcon />
        </button>
        <button
          onClick={handleClose}
          style={{
            backgroundColor: '#e22f22',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            margin: '10px',
            cursor: 'pointer',
          }}
        >
          Cancel <ClearIcon />
        </button>
      </div>
    </div>
  );
};

export default GroupSessionPopup;
