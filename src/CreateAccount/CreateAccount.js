import React, {useState} from 'react'
import './CreateAccount.css';

import BuddyUp from "../components/images/BuddyUp.png";
import Me from "../components/images/Me.png";

import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {

  const [isOpen, setIsOpen] = useState(false);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/NewAccount`; 
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

          <div className="frame-2">
            <div className="text-wrapper-2" contentEditable>Name: </div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-2" contentEditable>Year: </div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-2" contentEditable>DOB: </div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-2" contentEditable>Major: </div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-2" contentEditable>Minor: </div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-2" contentEditable>Likes: </div>
          </div>
          <div className="frame-2">
            <div className="text-wrapper-2" contentEditable>About Me: </div>
          </div>
        </div>
        
        <div className="frame-4" role='button' onClick={routeChange}>
          <div className="text-wrapper-3">Create</div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;