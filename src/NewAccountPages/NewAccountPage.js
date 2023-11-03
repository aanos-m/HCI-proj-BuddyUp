import React from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import Navigation from '../Navigation';
import Me from "../components/images/person.png";
import './NewAccountPage.css';


const NewAccountPage = () => {
  return (
  <>
    <div>
      <img className="image" alt="BuddyUp" src={BuddyUp} />
      <div id='screenDiv'>
        <div className="ellipse" role='button'>
          <img alt="profile pic" src= {Me} />
        </div>
      
      </div>
    </div>
    
    <div style={{ position: 'absolute', bottom: '0px'}}>
      <Navigation />
    </div>
  </>
  )
}

export default NewAccountPage