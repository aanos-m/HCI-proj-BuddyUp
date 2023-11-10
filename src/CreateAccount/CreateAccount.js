import React, {useState} from 'react'
import './CreateAccount.css';

import BuddyUp from "../components/images/BuddyUp.png";
import Me from "../components/images/Me.png";

import { useNavigate } from 'react-router-dom';

const CreateAccount = ({ newUserObj, setNewUserObj }) => {

  const handleInputChange = (field, value) => {
    setNewUserObj((prevObj) => ({ ...prevObj, [field]: value }));
  };

  const [isOpen, setIsOpen] = useState(false);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/NewAccount/Home`; 
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

            <input className="text-wrapper-2" type="text" placeholder="Name"
              onChange={(e) => handleInputChange('name', e.target.value)}/>

            <input className="text-wrapper-2" type="text" placeholder="Year"
            onChange={(e) => handleInputChange('year', e.target.value)}/>

            <input className="text-wrapper-2" type="text" placeholder="DOB"
            onChange={(e) => handleInputChange('dob', e.target.value)}
            />

            <input className="text-wrapper-2" type="text" placeholder="Major"
            onChange={(e) => handleInputChange('major', e.target.value)}
            />

            <input className="text-wrapper-2" type="text" placeholder="Minor"
            onChange={(e) => handleInputChange('minor', e.target.value)}
            />

            <input className="text-wrapper-2" type="text" placeholder="Likes"
            onChange={(e) => handleInputChange('likes', e.target.value)}
            />

            <textarea  className="text-wrapper-2" type="text" placeholder="About Me" wrap='soft'
            style={{overflow:'hidden', resize:'none'}}/>

        </div>
        
        <div className="frame-4" role='button' onClick={routeChange}>
          <div className="text-wrapper-3">Create</div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;