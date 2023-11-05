import React from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import Nav from '../Nav';
import { useNavigate } from 'react-router-dom';
import mapImg from '../components/images/maps.png'

const MapScreen = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/ReturnUser/Search`; 
      navigate(path);
    }

  return (
  
  <>
    <div className='NewAccountSearch'>

        <img className="image" alt="BuddyUp" src={BuddyUp} />
        <div  style={{ width: '350px', height: '500px', overflow: 'hidden',
                        overflowX: 'scroll', overflowY: 'scroll'}}>
            <img alt='mapImg' src={mapImg}/>
        </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column',
                    gap: '20px', 
                    position: 'absolute', bottom: '0px', justifyContent: 'center',
                    alignContent: 'center', alignItems: 'center'
                    }}>

        <button id='btn' onClick={routeChange}>
          Filter Search
        </button>
        <Nav />
      </div>
       </>
  )
}

export default MapScreen