import React, { useState, useEffect } from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Nav from '../Nav';
import MessagePopup from '../components/MessagePopup';
import MessageIcon from '@mui/icons-material/Message';
import ErrorIcon from '@mui/icons-material/Error';
import CustomModal from '../components/CustomModal';

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

  const friendsList = [
    {
      name: 'Jonez',
      date: '08/01/23',
      color: '#12FF8D'
    },
    {
      name: 'Leela',
      date: '08/12/23',
      icon: <AccountBoxIcon />,
      color: '#FF1212'
    },
    {
      name: 'Jayla',
      date: '09/16/23',
      icon: <AccountBoxIcon />,
      color: '#FFE712'
    },
    {
      name: 'Smith',
      date: '08/10/23',
      icon: <AccountBoxIcon />,
      color: '#12FF8D'
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
      color: '#FFE712'
    },
    {
      name: 'Lucas',
      date: '10/10/23',
      icon: <AccountBoxIcon />,
      color: '#12FF8D'
    },
    {
      name: 'Eddie',
      date: '08/02/23',
      icon: <AccountBoxIcon />,
      color: '#FF1212'
    },
    {
      name: 'Mikee',
      date: '09/20/23',
      icon: <AccountBoxIcon />,
      color: '#FFE712'
    },
    {
      name: 'Billy',
      date: '10/23/23',
      icon: <AccountBoxIcon />,
      color: '#12FF8D'
    },
    {
      name: 'Jacky',
      date: '09/20/23',
      icon: <AccountBoxIcon />,
      color: '#FF1212'
    },
    {
      name: 'Alysa',
      date: '12/02/23',
      icon: <AccountBoxIcon />,
      color: '#FFE712'
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
    }, 500); // Adjust the interval as needed

    // Clear the interval when the component unmounts
    return () => clearInterval(beepInterval);
  }, []);

  const handleClick = () => {
    // Open the custom modal alert when the icon is clicked
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Close the modal when the user interacts with it
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
    borderRadius: '50%', // Add a border-radius for a circular icon
    cursor: 'pointer', // Make the cursor indicate a clickable element
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
      <div style={{height:'550px', width: '350px', overflow: 'hidden', overflowY: 'scroll'}} >
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