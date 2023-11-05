import React from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Nav from '../Nav';


const ReturnUser = () => {

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
          <div key={index} style={{ 
                            borderRadius: '20px',
                            display: 'flex',
                            backgroundColor: 'rgba(35, 100, 227, 0.08)',
                            borderBottom: '1px solid #000',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '20px',
                            padding:'10px',
                            margin: '10px',
                            fontSize: '18px',
                            fontWeight: '500'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
              <circle cx="11.5" cy="11" r="11" fill={friend.color}/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <AccountBoxIcon/>
            </svg>
            <span>{friend.name}</span>
            <span>{friend.date}</span>
          </div>
        ))}
        </div>
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

export default ReturnUser