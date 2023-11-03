import React from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import Navigation from '../Navigation';
import './NewAccountSearch.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DropDown from '../components/DropDown';

const NewAccountSearch = () => {
  return (
    <>
    <div className='NewAccountSearch'>

      <img className="image" alt="BuddyUp" src={BuddyUp} />
        <div id='screenDiv'>

          <DropDown name=" Search Friends "/>
          <DropDown name=" Search Groups "/> 

        </div>
    </div>


    <div style={{ display: 'flex', flexDirection: 'column',
                  gap: '20px', 
                  position: 'absolute', bottom: '0px', justifyContent: 'center',
                  alignContent: 'center', alignItems: 'center'
                  }}>

      <button id='btn1'>
        Done <ArrowForwardIcon/>
      </button>

      <button id='btn2'>
        Back <ArrowBackIcon/>
      </button>
    
      <Navigation />
    </div>
  </>
  )
}

export default NewAccountSearch