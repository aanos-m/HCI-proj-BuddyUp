import React, { useState, useEffect } from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Nav from '../Nav';
import MessagePopup from '../components/MessagePopup';
// import MessageIcon from '@mui/icons-material/Message';
import ErrorIcon from '@mui/icons-material/Error';
import CustomModal from '../components/CustomModal';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { green, red, yellow } from '@mui/material/colors';
import Divider from '@mui/material/Divider';

const ReturnUser = () => {

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

  return (
    <>
      <img className="image" alt="BuddyUp" src={BuddyUp} />
      <ErrorIcon style={iconStyle} onClick={handleClick} />
      <CustomModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        modals={modals}
      />
      {/* <div style={{height:'550px', width: '350px', overflow: 'hidden', overflowY: 'scroll'}} >
        <div style={{height: '100%', width: '100%'}}>
          {friendsList.map((friend, index) => (
          <div role='button' id='friendDiv' key={index} style={{ 
                            borderRadius: '20px',
                            display: 'flex',
                            backgroundColor: 'rgba(35, 100, 227, 0.08)',
                            borderBottom: '1px solid #000',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            // justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '20px',
                            fontSize: '18px',
                            fontWeight: '500',
                            padding: '10px',
                            margin: '10px 0',
                            width: 'auto'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none" style={{marginLeft: '10px'}}>
              <circle cx="11.5" cy="11" r="11" fill={friend.color}/>
            </svg>
            <img src={friendImages[index]} alt="img" style={{ borderRadius: '50%', height: '30px', width: '30px' }} />
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <MessageIcon  onClick={handleFriendClick}/>
            </svg>
            <span>{friend.name}</span>
            <span>{friend.date}</span>
          </div>
        ))}
        </div>
      </div> */}
      <div style={{height:'550px', width: '350px', overflow: 'hidden', overflowY: 'scroll'}}>
        <List>
          {friendsList.map((friend, index) => (
            <React.Fragment key={friend.name} >
              <ListItem alignItems='flex-start' button onClick={() => handleFriendClick(friend)}>
                <ListItemAvatar>
                  <span style={{
                    height: '18px',
                    width: '18px',
                    backgroundColor: getStatusColor(friend.status),
                    borderRadius: '50%',
                    display: 'flex',
                    top: '50%',
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    // marginRight: '16px',
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
                {/* <IconButton edge="end" aria-label="message" onClick={() => {}}>
                  <MessageIcon />
                </IconButton>
                <Typography
                  sx={{ marginRight: 2 }}
                  component="span"
                  variant="body2"
                  style={{ backgroundColor: getColor(friend.color), borderRadius: '50%' }}
                /> */}
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </div>
      
      {isPopupVisible && (
        <MessagePopup onClose={closePopup} friend={selectedFriend} />
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

export default ReturnUser