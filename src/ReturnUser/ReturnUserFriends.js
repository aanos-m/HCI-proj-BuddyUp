import React, { useState, useEffect } from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Nav from '../Nav';
import MessagePopup from '../components/MessagePopup';
import MessageIcon from '@mui/icons-material/Message';


const ReturnUser = () => {

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friendImages, setFriendImages] = useState([]);

  useEffect(() => {
    const fetchFriendImages = async () => {
      const imagePromises = friendsList.map((friend) => fetch(`https://source.unsplash.com/random/?person/280x190&${friend.name}`)
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
      name: 'Joey',
      date: '08/01/23',
      color: '#12FF8D'
    },
    {
      name: 'Lily',
      date: '08/12/23',
      icon: <AccountBoxIcon/>,
      color: '#FF1212'
    },
    {
      name: 'Josh',
      date: '09/16/23',
      icon: <AccountBoxIcon/>,
      color: '#FFE712'
    },
    {
      name: 'Simon',
      date: '08/10/23',
      icon: <AccountBoxIcon/>,
      color: '#12FF8D'
    },
    {
      name: 'Skade',
      date: '08/19/23',
      icon: <AccountBoxIcon/>,
      color: '#FF1212'
    },
    {
      name: 'Adam',
      date: '09/01/23',
      icon: <AccountBoxIcon/>,
      color: '#FFE712'
    },
    {
      name: 'Lucy',
      date: '10/10/23',
      icon: <AccountBoxIcon/>,
      color: '#12FF8D'
    },
    {
      name: 'Edward',
      date: '08/02/23',
      icon: <AccountBoxIcon/>,
      color: '#FF1212'
    },
    {
      name: 'Micheal',
      date: '09/20/23',
      icon: <AccountBoxIcon/>,
      color: '#FFE712'
    },
    {
      name: 'Billy',
      date: '10/23/23',
      icon: <AccountBoxIcon/>,
      color: '#12FF8D'
    },
    {
      name: 'Jack',
      date: '09/20/23',
      icon: <AccountBoxIcon/>,
      color: '#FF1212'
    },
    {
      name: 'Allysa',
      date: '12/02/23',
      icon: <AccountBoxIcon/>,
      color: '#FFE712'
    }
  ]

  return (
    <>
      <img className="image" alt="BuddyUp" src={BuddyUp} />
      <div style={{height:'550px', width: '350px',
                  overflow: 'hidden',
                  overflowY: 'scroll'}} >
        <div style={{height: '100%', width: '100%'}}>
          {friendsList.map((friend, index) => (
          <div role='button' id='friendDiv' key={index} style={{ 
                            borderRadius: '20px',
                            display: 'flex',
                            backgroundColor: 'rgba(35, 100, 227, 0.08)',
                            borderBottom: '1px solid #000',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            gap: '20px',
                            fontSize: '18px',
                            fontWeight: '500',
                            padding: '10px',
                            margin: '10px 0',
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
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