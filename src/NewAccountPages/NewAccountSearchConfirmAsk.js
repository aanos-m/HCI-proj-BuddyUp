import React from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import Navigation from '../Navigation';
import CheckIcon from '@mui/icons-material/Check';
import Me from "../components/images/person.png";
import { useNavigate } from 'react-router-dom';

const NewAccountSearchConfirmAsk = ( {friendList }) => {

  const navigate = useNavigate();

  // Function to handle adding a friend
  function alertFriend() {
    // Get the friend's name (you may need to modify this based on your data)
    const friendName = `${friendList.stuName}`; // Replace with your actual data

    // Show the alert
    alert("Friend Added");

    // Navigate to NewAccountFriends with the friend's name as a parameter
    navigate(`/NewAccount/Friends/${friendName}`);
  }

  return (
    <>
    <div className='newAccountPage'>
      <img className="image" alt="BuddyUp" src={BuddyUp} />
      <div id='screenDiv' style={ {
        alignContent: 'center'
      }}>       
        <div className="ellipse" role='button'>
          <img alt="profile pic" src= {Me} />
        </div>
        <ul>
          <li>
            Name: {friendList.stuName}
          </li>
        </ul>
        <h1 style={{ fontWeight: 'bold'}}> 
            You're study session is confirmed! YAY!
        </h1> 
      </div>
    </div>

    <div 
    style={{ display: 'flex', flexDirection: 'column',
                  gap: '20px', 
                  position: 'absolute', bottom: '0px', justifyContent: 'center',
                  alignContent: 'center', alignItems: 'center'
                  }}>

      <button onClick={alertFriend}  style={{
            color: 'white',
            backgroundColor: '#1DD100',
            fontWeight: 'bold',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderRadius: '10px',
            display: "flex",
            border: 'none',
            width: '140px',
            height: '40px',
            boxShadow: '0px 4px 4px #00000040',
            gap: '10px',
            padding: '10px'

        }}>
        Add Friend <CheckIcon/>
      </button>
      <Navigation />
    </div>
</>
  )
}

export default NewAccountSearchConfirmAsk