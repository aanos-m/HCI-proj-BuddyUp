import React, {useState} from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import UTD from "../components/images/UTD.png";

import './Login.css'

import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/CreateAccount`; 
    navigate(path);
  }

    const returnUser = () => {
      if (username.length === 0 || password.length === 0) {
        alert('Username and password fields cannot be empty');
      } else if (username.length < 6 || password.length < 6) {
        alert(`Username and password must be at least 6 characters long, respectively.`);
      } else {
        let path = `/ReturnUser`; 
      navigate(path);
      }
    }

    return (
        <div className="login">
          <div className="div">
            <div className="frame">
              <div className="text-wrapper">Welcome</div>
            </div>

            <input className="div-wrapper" type="password" name="password" id="password" 
            placeholder="Enter your password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>

            <input className="frame-2" type="username" name="username" id="username" 
            placeholder="Enter your username" value={username}
            onChange={(e) => setUsername(e.target.value)}/>

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