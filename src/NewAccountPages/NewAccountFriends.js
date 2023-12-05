import React, { useState, useEffect } from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import Navigation from '../Navigation';
import ErrorIcon from '@mui/icons-material/Error';
import {  List, ListItem,  ListItemText, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import MessageIcon from '@mui/icons-material/Message';
import MessagePopup from '../components/MessagePopup';

const NewAccountFriends = ({ studyPartnersList }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const closePopup = () => {
    setPopupVisible(false);
  };
  const handleFriendClick = () => {
    setPopupVisible(true);
  };

  const [isBeeping, setIsBeeping] = useState(false);
  useEffect(() => {
    const beepInterval = setInterval(() => {
      setIsBeeping((prev) => !prev);
    }, 500);

    return () => clearInterval(beepInterval);
  }, []);

  const handleClick = () => {
    alert('1) Navigate to Search\n'+
          '2) Choose from the drop downs\n'+
          '3) Request and add friend (if you want to :) )\n'+
          '4) Maybe text friend afterwards!')
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

  const currDate = new Date().toLocaleDateString();
return (
  <>
    <div>
      <img className="image" alt="BuddyUp" src={BuddyUp} />
      <ErrorIcon style={iconStyle} onClick={handleClick} />

      <div id='screenDiv' style={{top: '-20px'}}>
        <container style={{width: '100%' , height: '100%', overFlowY: 'scroll'}}> 
        <List>
          {studyPartnersList.length > 0 ? (
                studyPartnersList.map((partner, index) => (
                  <React.Fragment key={index} >
                    <ListItem alignItems='flex-start' sx={{ justifyContent: 'center',alignItems: 'center'}}>
                      <ListItemText primary={partner.stuName}
                          secondary= {
                            <Typography sx={{ display: 'inline'}}
                            component='span'
                            variant='body2'
                            color="text.primary"
                            >
                              {currDate}
                            </Typography>
                      }
                      />
                      <MessageIcon onClick={handleFriendClick}/>
                    </ListItem>
                    <Divider component="li" />
                  </React.Fragment>
                ))
              ) : (
                <h1 id='textWrapper'>
                  It’s time for you to find study partners!!
                </h1>
              )
          }
          </List>
        </container>
        {isPopupVisible && (
        <MessagePopup onClose={closePopup} />
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