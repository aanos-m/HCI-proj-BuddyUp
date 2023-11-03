import React from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import Me from "../components/images/person.png";
import Navigation from '../Navigation';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import './NewAccountSearchConfirm.css';



const NewAccountSearchConfirm = (props) => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/NewAccount/Search/Confirm/Ask`; 
      navigate(path);
    }

    const routeBack = () =>{ 
        let path = `/NewAccount/Search`; 
        navigate(path);
      }
  

  return (
    <>
    <div className='NewAccountSearchConfirm'>
    <img className="image" alt="BuddyUp" src={BuddyUp} />
        <div id='screenDiv'>
          
          <div className="ellipse" role='button'>
            <img alt="profile pic" src= {Me} />
          </div>

          <ul>
            <li>
              Name: Mary Mendez 
            </li>
            <li>
              Studying: Computer Science 1
            </li>
            <li>
              Location: ECSW
            </li>
          </ul>
        
        </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column',
                    gap: '20px', 
                    position: 'absolute', bottom: '0px', justifyContent: 'center',
                    alignContent: 'center', alignItems: 'center'
                    }}>

        <button onClick={routeChange} 
        style={{
            color: 'white',
            backgroundColor: '#1DD100',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderRadius: '10px',
            display: "flex",
            border: 'none',
            width: '110px',
            height: '40px',
            boxShadow: '0px 4px 4px #00000040',
            gap: '10px',
            padding: '10px'

        }}>
          Request <ArrowForwardIcon/>
        </button>

        <button onClick={routeBack} 
        style={{
            color: 'white',
            backgroundColor: '#2364E3',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderRadius: '10px',
            display: "flex",
            border: 'none',
            width: '110px',
            height: '40px',
            boxShadow: '0px 4px 4px #00000040',
            gap: '10px',
            padding: '10px'

        }}>
          Back <ArrowBackIcon/>
        </button>
      
        <Navigation />
      </div>
</>
  )
}

export default NewAccountSearchConfirm