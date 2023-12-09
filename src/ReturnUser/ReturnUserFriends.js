import React, { useState, useEffect } from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Nav from '../Nav';
import MessagePopup from '../components/MessagePopup';
import MessageIcon from '@mui/icons-material/Message';
import IconButton from '@mui/material/IconButton';
import ErrorIcon from '@mui/icons-material/Error';
import CustomModal from '../components/CustomModal';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { green, red, yellow } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupSessionNotification from '../components/GroupSessionNotification';

const ReturnUserFriends = ({ groupSession }) => {

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friendImages, setFriendImages] = useState([]);

  useEffect(() => {
    const fetchFriendImages = async () => {
      const imagePromises = friendsList.map((friend) => fetch(`https://source.unsplash.com/random/?person/100x100&${friend.name}`)
        .then(response => response.url));
      const images = await Promise.all(imagePromises);
      setFriendImages(images);
    };

    fetchFriendImages();
    // eslint-disable-next-line
  }, []);

  const handleFriendClick = (friend) => {
    setSelectedFriend(friend);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedFriend(null);
  };



  const statusColor = {
    available: green[500],
    busy: yellow[700],
    unavailable: red[500],
  };

  const getStatusColor = (status) => {
    return statusColor[status] || statusColor.unavailable;
  };

  const friendsList = [
    {
      name: 'Jonez',
      date: '08/01/23',
      color: '#12FF8D',
      status: 'unavailable',
    },
    {
      name: 'Leela',
      date: '08/12/23',
      icon: <AccountBoxIcon />,
      color: '#FF1212',
      status: 'available',
    },
    {
      name: 'Jayla',
      date: '09/16/23',
      icon: <AccountBoxIcon />,
      color: '#FFE712',
      status: 'unavailable',
    },
    {
      name: 'Smith',
      date: '08/10/23',
      icon: <AccountBoxIcon />,
      color: '#12FF8D',
      status: 'busy',
    },
    {
      name: 'Skade',
      date: '08/19/23',
      icon: <AccountBoxIcon />,
      color: '#FF1212'
    },
    {
      name: 'Aaron',
      date: '09/01/23',
      icon: <AccountBoxIcon />,
      color: '#FFE712',
      status: 'available',
    },
    {
      name: 'Lucas',
      date: '10/10/23',
      icon: <AccountBoxIcon />,
      color: '#12FF8D',
      status: 'available',
    },
    {
      name: 'Eddie',
      date: '08/02/23',
      icon: <AccountBoxIcon />,
      color: '#FF1212',
      status: 'unavailable',
    },
    {
      name: 'Mikee',
      date: '09/20/23',
      icon: <AccountBoxIcon />,
      color: '#FFE712',
      status: 'available',
    },
    {
      name: 'Billy',
      date: '10/23/23',
      icon: <AccountBoxIcon />,
      color: '#12FF8D',
      status: 'unavailable',
    },
    {
      name: 'Jacky',
      date: '09/20/23',
      icon: <AccountBoxIcon />,
      color: '#FF1212',
      status: 'busy',
    },
    {
      name: 'Alysa',
      date: '12/02/23',
      icon: <AccountBoxIcon />,
      color: '#FFE712',
      status: 'busy',
    }
  ];
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modals = [
    { color: 'red', text: 'Friend is away' },
    { color: 'yellow', text: 'Friend is busy' },
    { color: 'green', text: 'Friend is avaliable' },
  ];
  
  const [isBeeping, setIsBeeping] = useState(false);
  useEffect(() => {
    const beepInterval = setInterval(() => {
      setIsBeeping((prev) => !prev);
    }, 500); 

    return () => clearInterval(beepInterval);
  }, []);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const iconStyle = {
    color: '#FFD700',
    position: 'relative',
    left: '150px',
    top: '-10px',
    transition: 'border-color 0.3s ease',
    borderColor: isBeeping ? 'transparent' : 'black',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '50%', 
    cursor: 'pointer', 
  };

  const iStyle = {
    color: '#e22f22',
    position: 'relative',
    left: '-150px',
    top: '20px',
    transition: 'border-color 0.3s ease',
    borderColor: isBeeping ? 'transparent' : 'black',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '50%', 
    cursor: 'pointer', 
  };

  const [isGroupSessionNotificationVisible, setGroupSessionNotificationVisible] = useState(false);

  const handleGroupSessionNotificationClick = () => {
    setGroupSessionNotificationVisible(true);
  };

  const closeNoti = () => {
    setGroupSessionNotificationVisible(false)
  }

  return (
    <>
      <img className="image" alt="BuddyUp" src={BuddyUp} />
       
      <NotificationsIcon style={iStyle} onClick={handleGroupSessionNotificationClick} />
      <ErrorIcon style={iconStyle} onClick={handleClick} />
      <CustomModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        modals={modals}
      />
      <div style={{height:'550px', width: '350px', overflow: 'hidden', overflowY: 'scroll'}}>
        <List>
          {friendsList.map((friend, index) => (
            <React.Fragment key={friend.name}>
              <ListItem alignItems='center'>
                <ListItemAvatar>
                  <span style={{
                    height: '18px',
                    width: '18px',
                    backgroundColor: getStatusColor(friend.status),
                    borderRadius: '50%',
                    display: 'inline-flex',
                    top: '35%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '2px',
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    border: '2px solid white'
                  }} />
                  <Avatar alt={friend.name} src={friendImages[index]} />
                </ListItemAvatar>
                <ListItemText primary={friend.name} 
                secondary={
                  <Typography sx={{ display: 'inline'}}
                  component='span'
                  variant='body2'
                  color="text.primary"
                  >
                    {friend.date}
                  </Typography>
                }
                />
                <IconButton edge="end" aria-label="message" >
                  <MessageIcon fontSize='large'onClick={() => handleFriendClick(friend)}/>
                </IconButton>
                <Typography
                  sx={{ marginRight: 2 }}
                  component="span"
                  variant="body2"
                  style={{  borderRadius: '50%' }}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </div>
      
      {isPopupVisible && (
        <MessagePopup onClose={closePopup} friend={selectedFriend} />
      )}

      {isGroupSessionNotificationVisible && (
        <GroupSessionNotification groupSession={groupSession} onClose={closeNoti} />
      )}

      
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

export default ReturnUserFriends