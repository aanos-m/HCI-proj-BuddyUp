import React from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import UTD from "../components/images/UTD.png";

import './Login.css'

import { useNavigate } from 'react-router-dom';

const Login = () => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/CreateAccount`; 
    navigate(path);
  }

  const returnUser = () => {
    let path = `/ReturnUser`; 
    navigate(path);
  }
    return (
        <div className="login">
          <div className="div">
            <div className="frame">
              <div className="text-wrapper">Welcome</div>
            </div>

            <input className="div-wrapper" type="password" name="password" id="password" 
            placeholder="Enter your password"/>

            <input className="frame-2" type="username" name="username" id="username" 
            placeholder="Enter your username"/>

            <div className="frame-3" role='button' onClick={returnUser}>
              <div className="text-wrapper-3" >Login</div>
            </div>

            <img src={UTD} className="screenshot" alt="UTD Logo"  />
            <img src={BuddyUp} className="image" alt="BuddyUp Logo"  />

            <div className="frame-4" role='button'>
              <div className="text-wrapper-4">Forgot username or password</div>
            </div>
            <div className="frame-5" role='button' onClick={routeChange}>
              <div className="text-wrapper-4">New user? Sign Up</div>
            </div>
          </div>
        </div>
      );
}

export default Login;