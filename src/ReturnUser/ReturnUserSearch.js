import React from 'react';
import Nav from '../Nav';
import BuddyUp from "../components/images/BuddyUp.png";
import '../NewAccountPages/NewAccountSearch.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DropDown from '../components/DropDown';
import { useNavigate } from 'react-router-dom';
import MapIcon from '@mui/icons-material/Map';

const ReturnUserSearch = ({friendList, setFriendList} ) => {

  const handleNameChange = (selectedName) => {
    setFriendList((prevFriendList) => ({
      ...prevFriendList,
      stuName: selectedName,
    }));
  };

  // Callback function to update friendList with selected class
  const handleClassChange = (selectedClass) => {
    setFriendList((prevFriendList) => ({
      ...prevFriendList,
      class: selectedClass,
    }));
  };

  // Callback function to update friendList with selected place
  const handlePlaceChange = (selectedPlace) => {
    setFriendList((prevFriendList) => ({
      ...prevFriendList,
      place: selectedPlace,
    }));
  };
   
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/ReturnUser/Search/Confirm`; 
    navigate(path);
  }

  const mapRoute = () =>{ 
    let path = `/ReturnUser/Search/Map`; 
    navigate(path);
  }


  const friendsList = [
    {
      name: 'Jonez',
      date: '08/01/23',
      color: '#12FF8D'
    },
    {
      name: 'Leela',
      date: '08/12/23',
      color: '#FF1212'
    },
    {
      name: 'Jayla',
      date: '09/16/23',
      color: '#FFE712'
    },
    {
      name: 'Smith',
      date: '08/10/23',
      color: '#12FF8D'
    },
    {
      name: 'Skade',
      date: '08/19/23',
      color: '#FF1212'
    },
    {
      name: 'Aaron',
      date: '09/01/23',
      color: '#FFE712'
    },
    {
      name: 'Lucas',
      date: '10/10/23',
      color: '#12FF8D'
    },
    {
      name: 'Eddie',
      date: '08/02/23',
      color: '#FF1212'
    },
    {
      name: 'Mikee',
      date: '09/20/23',
      color: '#FFE712'
    },
    {
      name: 'Billy',
      date: '10/23/23',
      color: '#12FF8D'
    },
    {
      name: 'Jacky',
      date: '09/20/23',
      color: '#FF1212'
    },
    {
      name: 'Alysa',
      date: '12/02/23',
      color: '#FFE712'
    }
  ];
  
  const locations = [
    { name: 'Activity Center (AB)' },
    { name: 'Administration (AD)' },
    { name: 'Alexander Clark Center (CN)' },
    { name: 'Arts and Humanities 1 (AH1)' },
    { name: 'Arts and Humanities 2 (AH2)' },
    { name: 'Callier Center Richardson (CR)' },
    { name: 'Cecil and Ida Green Center (GC)' },
    { name: 'Cecil H. Green Hall (GR)' },
    { name: 'Classroom Building 1 (CB1)' },
    { name: 'Classroom Building 2 (CB2)' },
    { name: 'Classroom Building 3 (CB3)' },
    { name: 'Construction Management (CM)' },
    { name: 'Dining Hall West (DHW)' },
    { name: 'Edith O\'Donnell Arts and Technology Building (ATC)' },
    { name: 'Energy Plant (EP)' },
    { name: 'English Language Center (ELS)' },
    { name: 'Erik Jonsson Academic Center (JO)' },
    { name: 'Eugene McDermott Library (MC)' },
    { name: 'Facilities Management (FM)' },
    { name: 'Founders Building (FO)' },
    { name: 'Founders North (FN)' },
    { name: 'Founders West Annex (FA)' },
    { name: 'Karl Hoblitzelle Hall (HH)' },
    { name: 'Lloyd V. Berkner Hall (BE)' },
    { name: 'Natural Science & Engineering Research Lab (RL)' },
    { name: 'North Engineering and Computer Science (ECSN)' },
    { name: 'North Lab (NL)' },
    { name: 'North Office Building (NB)' },
    { name: 'Old Service Building (OSB)' },
    { name: 'Parking Structure 1 (PS1)' },
    { name: 'Physics Building (PHY)' },
    { name: 'Research and Operations Center (ROC)' },
    { name: 'Residence Hall North (RHN)' },
    { name: 'Residence Hall Northwest (RHNW)' },
    { name: 'Residence Hall South (RHS)' },
    { name: 'Residence Hall Southwest (RHSW)' },
    { name: 'Residence Hall West (RHW)' },
    { name: 'Safety and Grounds (SG)' },
    { name: 'School of Management (JSOM)' },
    { name: 'Science Learning Center (SLC)' },
    { name: 'Service Building (SB)' },
    { name: 'South Engineering and Computer Science (ECSS)' },
    { name: 'Student Services Building (SSB)' },
    { name: 'Student Union (SU)' },
    { name: 'Student Union Dining Hall (SUDH)' },
    { name: 'Supplemental Utility Plant (SUP)' },
    { name: 'Synergy Park North (SPN)' },
    { name: 'Theatre (TH)' },
    { name: 'Visitor Center and University Bookstore (VCB)' },
    { name: 'Visual Arts Studio (AS)' },
    { name: 'Waterview Science and Technology Center (WSTC)' }
  ];
  
  const subjects = [
    { name: 'ECS 1100' },
    { name: 'CS 1200' },
    { name: 'CS 1336' },
    { name: 'CS 1136' },
    { name: 'CS 1337' },
    { name: 'CS 2305' },
    { name: 'CS 2336' },
    { name: 'SE 2340' },
    { name: 'MATH 2413' },
    { name: 'MATH 2414' },
    { name: 'MATH 2418' },
    { name: 'PHYS 2325' },
    { name: 'PHYS 2125' },
    { name: 'PHYS 2326' },
    { name: 'PHYS 2126' },
    { name: 'SE 3162' },
    { name: 'SE 3306' },
    { name: 'SE 3341' },
    { name: 'SE 3345' },
    { name: 'SE 3354' },
    { name: 'SE 3377' },
    { name: 'SE 4347' },
    { name: 'SE 4348' },
    { name: 'SE 4351' },
    { name: 'SE 4352' },
    { name: 'SE 4367' },
    { name: 'SE 4381' },
    { name: 'SE 4485' },
    { name: 'CS 4361' },
    { name: 'CS 4361' },
    { name: 'CS 4349' },
    { name: 'ECS 3390' },
    { name: 'RHET 1302' },
    { name: 'GOVT 2305' },
    { name: 'GOVT 2306' },
    { name: 'HIST 1301' },
    { name: 'HIST 1302' },
    { name: 'PHIL 1301' },
    { name: 'ARTS 1301' },
    { name: 'ECON 2301' },
    { name: 'ENGL 2311' },
    { name: 'ENGL 1301' },
    { name: 'PHED 1164' },
    { name: 'UNIV 1010' },
    { name: 'UNIV 2020' }
  ];


  return (
    <>
    <div className='NewAccountSearch'>

      <img className="image" alt="BuddyUp" src={BuddyUp} />
        <div id='screenDiv'>
          <DropDown onSelect={handleNameChange} name="Search Students" options={friendsList}/>
          <DropDown onSelect={handleClassChange} name=" Search Topics" options={subjects}/>
          <DropDown onSelect={handlePlaceChange} name= "Locations" options={locations}/>
        </div>
      </div>

    
    <div style={{ display: 'flex', flexDirection: 'column',
                    gap: '20px', 
                    position: 'absolute', bottom: '0px', justifyContent: 'center',
                    alignContent: 'center', alignItems: 'center'
                    }}>

            <button id='btn1' onClick={routeChange}>
            Done <ArrowForwardIcon/>
          </button>

          <button id='btn1' onClick={mapRoute}>
            Map <MapIcon/>
          </button>
        <Nav />
      </div>
    </>
  )
}

export default ReturnUserSearch