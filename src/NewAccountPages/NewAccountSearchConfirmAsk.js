import React from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import Navigation from '../Navigation';
import CheckIcon from '@mui/icons-material/Check';
import Me from "../components/images/person.png";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NewAccountSearchConfirmAsk = ( {friendList, setStudyPartnersList }) => {

  const navigate = useNavigate();

  // Function to handle adding a friend
  function alertFriend() {
      // Add the friend to the studyPartnersList state
      setStudyPartnersList((prevPartners) => [...prevPartners, friendList]);

      // Show the alert
      alert("Study Partner Added");

      // Navigate to NewAccountFriends
      navigate(`/NewAccount/Friends`);
  }

  const routeBack = () =>{ 
    let path = `/NewAccount/Search`; 
    navigate(path);
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
        <span>
        Name: {friendList.stuName}
        </span>
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

        <button onClick={routeBack} 
          style={{
              color: 'white',
              backgroundColor: '#2364E3',
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
          Back <ArrowBackIcon/>
        </button>
      
      <Navigation />
    </div>
</>
  )
}

export default NewAccountSearchConfirmAsk