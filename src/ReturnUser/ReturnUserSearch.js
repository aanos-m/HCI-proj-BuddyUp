import React from 'react';
import Nav from '../Nav';
import BuddyUp from "../components/images/BuddyUp.png";
import '../NewAccountPages/NewAccountSearch.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DropDown from '../components/DropDown';
import { useNavigate } from 'react-router-dom';
import MapIcon from '@mui/icons-material/Map';

const ReturnUserSearch = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/ReturnUser/Search/Confirm`; 
    navigate(path);
  }

  const mapRoute = () =>{ 
    let path = `/ReturnUser/Search/Map`; 
    navigate(path);
  }
  return (
    <>
    <div className='NewAccountSearch'>

      <img className="image" alt="BuddyUp" src={BuddyUp} />
        <div id='screenDiv'>

            <DropDown name=" Search Nearby " option1="Mary Mendez" option2="John Jackson" option3="Phil Jackson"/>
            <DropDown name=" Search Groups " option1="Computer Science 1" option2="Music" option3="Pysch 1301"/> 
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

          <button id='btn1' onClick={mapRoute}>
            Map <MapIcon/>
          </button>
        <Nav />
      </div>
    </>
  )
}

export default ReturnUserSearch