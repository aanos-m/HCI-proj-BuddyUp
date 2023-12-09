import React, {useState} from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import UTD from "../components/images/UTD.png";
import './Login.css'
import { useNavigate } from 'react-router-dom';
import ForgotModal from '../components/ForgotModal';


const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/CreateAccount`; 
    navigate(path);
  }

    const returnUser = () => {
      if (username !== 'test123' || password !== 'test123') {
        alert('WRONG INPUT\nenter "test123" to login');
      } else if ((username === 'test123' && password !== 'test123' ) || (username !== 'test123' && password === 'test123')) {
        alert('WRONG INPUT\nenter "test123" to login');
      } else {
        let path = `/ReturnUser/Home`; 
      navigate(path);
      }
    }

    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

    const openForgotPasswordModal = () => {
      setShowForgotPasswordModal(true);
    };

    const closeForgotPasswordModal = () => {
      setShowForgotPasswordModal(false);
    };

    const handleResetPassword = (forgotOption) => {
      // Handle the reset password logic based on the user's selection
      console.log(`User selected: ${forgotOption}`);
      // Implement the logic to handle resetting the password or username

      // Close the modal after handling the reset logic
      closeForgotPasswordModal();
    };

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

            <div className="frame-4" role='button' onClick={openForgotPasswordModal}>
              <div className="text-wrapper-4">Forgot username or password</div>
            </div>
            <div className="frame-5" role='button' onClick={routeChange}>
              <div className="text-wrapper-4">New user? Sign Up</div>
            </div>

          </div>
          {showForgotPasswordModal && (
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 999, // Ensure it appears above other elements
                }}
              >
                <div
                  style={{
                    background: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <ForgotModal
                    onClose={closeForgotPasswordModal}
                    onResetPassword={handleResetPassword}
                  />
                </div>
              </div>
            )}
        </div>
      );
}

export default Login;