import './NewAccountHome.css';
import React, { useState, useEffect } from 'react';
import BuddyUp from "../components/images/BuddyUp.png";
import Navigation from '../Navigation';


const NewAccount = () => {

  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []); 


  return (
    <>
      <div>
        <img className="image" alt="BuddyUp" src={BuddyUp} />
        <div id='screenDiv' >
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
      {showTooltip && (
        <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          bottom: '70px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#333',
          color: '#fff',
          padding: '10px',
          gap: '20px',
          borderRadius: '5px',
          opacity: '0.9',
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        Home: posts of you and your friends
        <br/>
        Friends: list of all your friends
        <br/>
        Search: make study plans
        <br/> 
        Account: general settings 
      </div>
      )}
    </>
  )
}

export default NewAccount