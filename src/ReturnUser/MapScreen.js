import React  from 'react'
import BuddyUp from "../components/images/BuddyUp.png";
import Nav from '../Nav';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api';

const utd = {
  lat: 32.985260,
  lng: -96.754128
};

const locations = [
  {
    name: "ECSS",
    lat:32.987502786590134, 
    lng:-96.75019060010982
  },
  {
    name: "ECSW",
    lat: 32.9900205910559, 
    lng: -96.75223688888711
  },
];

const MapScreen = () => {
  // const [selected, setSelected] = useState(null);

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
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={{ width: '100%', height: '100%'}}
                        center={utd}
                        zoom={15}
            >
              <MarkerF position={utd}/>
              {locations.map((location, index) => (
                <Marker key={index} position={{ lat:location.lat, lng:location.lng }} />
              ))}

            </GoogleMap>
          </LoadScript>
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