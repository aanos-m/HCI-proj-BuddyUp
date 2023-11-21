import React, {useState} from 'react'
import './CreateAccount.css';

import BuddyUp from "../components/images/BuddyUp.png";
import Me from "../components/images/Me.png";

import { useNavigate } from 'react-router-dom';

const CreateAccount = ({ newUserObj, setNewUserObj }) => {
  const MAX_CHARACTER_LIMIT_AGE = 2;
  const MAX_CHARACTER_LIMIT_ABOUT_ME = 200

  const handleInputChange = (field, value) => {
    let maxCharacterLimit;
    switch (field) {
      case 'age':
        maxCharacterLimit = MAX_CHARACTER_LIMIT_AGE;
        break;
      case 'aboutMe':
        maxCharacterLimit = MAX_CHARACTER_LIMIT_ABOUT_ME;
        break;
      default:
        maxCharacterLimit = 25; // No character limit for other fields
    }
    if (value.length <= maxCharacterLimit) {
      setNewUserObj((prevObj) => ({ ...prevObj, [field]: value }));
    }
  };

  const [isOpen, setIsOpen] = useState(false);


  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    if (newUserObj.name && newUserObj.year && newUserObj.age && newUserObj.major && newUserObj.minor && newUserObj.likes && newUserObj.aboutMe) {
      let path = `/NewAccount/Home`;
      navigate(path);
    } else {
      // Display an error message or handle it as needed
      alert("Please fill in all fields.");
    }
  }
  const routeBack = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  return (
    <div className="createAccount">
      <div className="div">
        <img className="image" alt="BuddyUp" src={BuddyUp} />
        <div className="frame">
          <div className="ellipse" role='button'>
            {
            isOpen? <img alt="profile pic" src= {Me} />:null
            }
            <div role='button' onClick={()=>setIsOpen(!isOpen)} id='toggleBtn'> Toggle </div>
          </div>

            <input className="text-wrapper-2" type="text" placeholder="Name" value={newUserObj.name}
              onChange={(e) => handleInputChange('name', e.target.value)}/>

            <input className="text-wrapper-2" type="text" placeholder="Year" value={newUserObj.year}
            onChange={(e) => handleInputChange('year', e.target.value)}/>

            <input className="text-wrapper-2" type="text" placeholder="Age" value={newUserObj.age}
            onChange={(e) => handleInputChange('age', e.target.value)}
            />

            <input className="text-wrapper-2" type="text" placeholder="Major" value={newUserObj.major}
            onChange={(e) => handleInputChange('major', e.target.value)}
            />

            <input className="text-wrapper-2" type="text" placeholder="Minor" value={newUserObj.minor}
            onChange={(e) => handleInputChange('minor', e.target.value)}
            />

            <input className="text-wrapper-2" type="text" placeholder="Likes" value={newUserObj.likes}
            onChange={(e) => handleInputChange('likes', e.target.value)}
            />

            <textarea  className="text-wrapper-2" type="text" placeholder="About Me" wrap='soft' value={newUserObj.aboutMe}
            onChange={(e) => handleInputChange('aboutMe', e.target.value)}
            style={{overflow:'hidden', resize:'none'}}/>

        </div>
        
        <div className="frame-4" role='button' onClick={routeChange}>
          <p className="text-wrapper-3">Create</p>
        </div>

        <div className="frame-5" role='button' onClick={routeBack}>
          <p className="text-wrapper-3">Back</p>
        </div>

      </div>
    </div>
  );
}

export default CreateAccount;