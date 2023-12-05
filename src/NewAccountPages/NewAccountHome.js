import './NewAccountHome.css';
import React, { useState, useEffect } from 'react';
import BuddyUp from "../components/images/BuddyUp.png";
import Navigation from '../Navigation';
import ErrorIcon from '@mui/icons-material/Error';

const NewAccount = () => {

  const [isBeeping, setIsBeeping] = useState(false);
  useEffect(() => {
    const beepInterval = setInterval(() => {
      setIsBeeping((prev) => !prev);
    }, 500);

    return () => clearInterval(beepInterval);
  }, []);

  const handleClick = () => {
    alert('Home: posts of you and your friends\nFriends: list of all your friends\n'
    + 'Search: make study plans\nAccount: change password & logout')
  };
  const iconStyle = {
    color: '#FFD700',
    position: 'relative',
    left: '300px',
    top: '-60px',
    transition: 'border-color 0.3s ease',
    borderColor: isBeeping ? 'transparent' : 'black',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '50%', 
    cursor: 'pointer', 
  };


  return (
    <>
      <div>
        <img className="image" alt="BuddyUp" src={BuddyUp} />
        <ErrorIcon style={iconStyle} onClick={handleClick} />

        <div id='screenDiv' style={{top: '-20px'}}>
          <h1 id='textWrapper'>
            It’s time for 
            you to connect with people!!
          </h1>
        </div>
      </div>
      
      <div id='firstNav' data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" style={{
        position: 'absolute',
        bottom: '0px'
      }}>
        <Navigation />
      </div>
    </>
  )
}

export default NewAccount