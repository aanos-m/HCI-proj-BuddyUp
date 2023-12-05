import React from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import Navigation from '../Navigation';
import { useParams } from 'react-router-dom';


const NewAccountFriends = () => {

  const { friendName } = useParams();
return (
  <>
    <div>
      <img className="image" alt="BuddyUp" src={BuddyUp} />
      <div id='screenDiv'>

      {friendName ? (
          <span>{friendName}</span>
        ) : (

          <h1 id='textWrapper'>
              It’s time for 
              you to make friends!!
          </h1>
        )}
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


export default NewAccountFriends