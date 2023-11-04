import React from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import Navigation from '../Navigation';
import Me from "../components/images/Me.png";
import './NewAccountPage.css';
import { useNavigate } from 'react-router-dom';


const NewAccountPage = () => {

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
              Name: Jackie Mendez
            </li>
            <li>
              Major: Computer Science
            </li>
            <li>
              Year: Senior
            </li>
            <li>
              Likes: Music, soccer, and art
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

        <button id='btn'>
          Change Password
        </button>

        <button id='btn'>
          Change Settings
        </button>
      
        <Navigation />
      </div>
  </>
  )
}

export default NewAccountPage