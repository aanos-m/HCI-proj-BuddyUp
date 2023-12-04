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

        <button onClick={routeChange} style={{
          alignItems: 'center',
          color: 'white',
          backgroundColor: '#2264e2',
          borderRadius: '15px',
          boxShadow: '0px 4px 4px #00000040',
          display: 'flex',
          gap: '10px',
          height: '40px',
          justifyContent: 'center',
          left: '110px',
          top: '620px',
          width: 'auto',
          border: 'none',
          fontWeight: '400',
          padding: '20px'
        }}>
          Filter Search
        </button>
        <Nav />
      </div>
       </>
  )
}

export default MapScreen