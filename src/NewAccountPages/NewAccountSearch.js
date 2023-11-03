import React from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import Navigation from '../Navigation';
import './NewAccountSearch.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DropDown from '../components/DropDown';

import { useNavigate } from 'react-router-dom';

const NewAccountSearch = () => {

  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/NewAccount/Search/`; 
    navigate(path);
  }


  return (
    <>
      <div className='NewAccountSearch'>

        <img className="image" alt="BuddyUp" src={BuddyUp} />
          <div id='screenDiv'>

              <DropDown name=" Search Nearby " option1="Macy" option2="John" option3="Phil"/>
              <DropDown name=" Search Groups " option1="OS" option2="Music" option3="Pysch 1301"/> 
              <DropDown name=" Location " option1="ECSW" option2="JO" option3="Green Hall"/> 

          </div>
      </div>


      <div style={{ display: 'flex', flexDirection: 'column',
                    gap: '20px', 
                    position: 'absolute', bottom: '0px', justifyContent: 'center',
                    alignContent: 'center', alignItems: 'center'
                    }}>

        <button id='btn1' onClick={routeChange}>
          Done <ArrowForwardIcon/>
        </button>

        {/* <button id='btn2'>
          Back <ArrowBackIcon/>
        </button> */}
      
        <Navigation />
      </div>
    </>
  )
}

export default NewAccountSearch