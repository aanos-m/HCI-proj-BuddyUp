import React from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import Navigation from '../Navigation';

const NewAccountSearch = () => {
  return (
    <>
    <div>
      <img className="image" alt="BuddyUp" src={BuddyUp} />
      <div id='screenDiv'>
        <h1 id='textWrapper'>
            New Account Search
        </h1>
      </div>
    </div>
    
    <div style={{
      position: 'absolute',
      bottom: '0px'
    }}>
      <Navigation />
    </div>
  </>
  )
}

export default NewAccountSearch