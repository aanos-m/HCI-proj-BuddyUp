import React from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import Navigation from '../Navigation';
import './NewAccountSearch.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DropDown from '../components/DropDown';

import { useNavigate } from 'react-router-dom';

const NewAccountSearch = ( {friendList, setFriendList} ) => {

  const handleNameChange = (selectedName) => {
    setFriendList((prevFriendList) => ({
      ...prevFriendList,
      stuName: selectedName,
    }));
  };

  // Callback function to update friendList with selected class
  const handleClassChange = (selectedClass) => {
    setFriendList((prevFriendList) => ({
      ...prevFriendList,
      class: selectedClass,
    }));
  };

  // Callback function to update friendList with selected place
  const handlePlaceChange = (selectedPlace) => {
    setFriendList((prevFriendList) => ({
      ...prevFriendList,
      place: selectedPlace,
    }));
  };

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/NewAccount/Search/Confirm`; 
    navigate(path);
  }
  return (
    <>
      <div className='NewAccountSearch'>

        <img className="image" alt="BuddyUp" src={BuddyUp} />
          <div id='screenDiv'>

              <DropDown onSelect={handleNameChange} name=" Search Nearby " option1="Mary Mendez" option2="John Jackson" option3="Phil Jackson" />
              <DropDown onSelect={handleClassChange} name=" Search Groups " option1="Computer Science 1" option2="Music" option3="Pysch 1301"/> 
              <DropDown onSelect={handlePlaceChange} name=" Location " option1="ECSW" option2="JO" option3="Green Hall"/> 

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
      
        <Navigation />
      </div>
    </>
  )
}

export default NewAccountSearch