import React, {useState} from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import Navigation from '../Navigation';
import Me from "../components/images/Me.png";
import './NewAccountPage.css';
import { useNavigate } from 'react-router-dom';
import ChangePasswordPopup from '../components/ChangePasswordPopup';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

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

  const iconStyle = {
    animation: 'rotate 2s linear infinite', // Adjust the duration and timing function as needed
  };

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
                Grad Year: {newUserObj.year}
              </li>
              <li>
                Age: {newUserObj.age}
              </li>
              <li>
                Major: {newUserObj.major}
              </li>
              <li>
                Minor: {newUserObj.minor}
              </li>
              <li>
                Likes: {newUserObj.likes}
              </li>
          </ul>        
        </div>
      </div>

      <div 
      style={{ display: 'flex', flexDirection: 'column',
              gap: '20px', 
              position: 'absolute', bottom: '0px', justifyContent: 'center',
              alignContent: 'center', alignItems: 'center'}}>
          
        <button onClick={openChangePasswordPopup}
          style={{
            alignItems: 'center',
            color: 'white',
            backgroundColor: '#2264e2',
            borderRadius: '15px',
            boxShadow: '0px 4px 4px #00000040',
            display: 'flex',
            gap: '10px',
            height: '40px',
            justifyContent: 'center',
            left: '110px',
            top: '620px',
            width: 'auto',
            border: 'none',
            fontWeight: '400',
          }}> 
          <SettingsIcon style={iconStyle}/> Change Password
        </button>
        {showChangePasswordPopup && (
          <ChangePasswordPopup onClose={closeChangePasswordPopup} />
        )}

        <button onClick={logout} 
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
            top: '620px',
            width: '170px',
            border: 'none',
            fontWeight: '400'
          }}>
            <LogoutIcon/> Logout
        </button>

        <Navigation />
      </div>
  </>
  )
}

export default NewAccountPage