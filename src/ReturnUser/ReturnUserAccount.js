import React, { useState } from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import Nav from '../Nav';
import Me from "../components/images/Me.png";
import '../NewAccountPages/NewAccountPage.css';
import { useNavigate } from 'react-router-dom';
import ChangePasswordPopup from '../components/ChangePasswordPopup';
import { Avatar, Button, Card, Typography, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';


const ReturnUserAccount = () => {

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

          <Typography variant="h4" gutterBottom>
          Jackie Mendez
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Senior
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Computer Science
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 2 }}>
            Interested in: Music, soccer, and food
          </Typography>
          <Button variant="outlined" color="primary" onClick={openChangePasswordPopup} sx={{ mb: 1 }}>
          <SettingsIcon/> Change Password
          </Button>
          
            {showChangePasswordPopup && (
            <ChangePasswordPopup onClose={closeChangePasswordPopup} />
            )}  
            
        </div>
        <Button variant="contained" color="error"  onClick={logout}>
        <LogoutIcon/> Logout
        </Button>
      </div>
      
      

      <div style={{ display: 'flex', flexDirection: 'column',
                    gap: '20px', 
                    position: 'absolute', bottom: '0px', justifyContent: 'center',
                    alignContent: 'center', alignItems: 'center'
                    }}>

            
        <Nav />
      </div>
  </>
  )
}

export default ReturnUserAccount