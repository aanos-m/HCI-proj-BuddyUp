import React, {useState} from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import Navigation from '../Navigation';
import Me from "../components/images/Me.png";
import './NewAccountPage.css';
import { useNavigate } from 'react-router-dom';
import ChangePasswordPopup from '../components/ChangePasswordPopup';

const NewAccountPage = ( { newUserObj } ) => {
  const [showChangePasswordPopup, setShowChangePasswordPopup] = useState(false);

  const openChangePasswordPopup = () => {
    setShowChangePasswordPopup(true);
  };

  const closeChangePasswordPopup = () => {
    setShowChangePasswordPopup(false);
  };

  let navigate = useNavigate(); 
  const logout = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  return (
    <>
      <div className='newAccountPage'>
        <img className="image" alt="BuddyUp" src={BuddyUp} />
        <div id='screenDiv'>
          
          <div className="ellipse" role='button'>
            <img alt="profile pic" src= {Me} />
          </div>

          <ul>
            <li>
              Name: {newUserObj.name}
            </li>
            <li>
              age: {newUserObj.age}
            </li>
            <li>
              Major: {newUserObj.major}
            </li>
            <li>
              Year: {newUserObj.year}
            </li>
            <li>
              Likes: {newUserObj.likes}
            </li>
          </ul>
          <button id='btnn' onClick={logout}>
            Logout
          </button>
        
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column',
                    gap: '20px', 
                    position: 'absolute', bottom: '0px', justifyContent: 'center',
                    alignContent: 'center', alignItems: 'center'
                    }}>

        <button id='btn' onClick={openChangePasswordPopup}>
          Change Password
        </button>
        {showChangePasswordPopup && (
        <ChangePasswordPopup onClose={closeChangePasswordPopup} />
      )}

        <button id='btn'>
          Change Settings
        </button>
      
        <Navigation />
      </div>
  </>
  )
}

export default NewAccountPage