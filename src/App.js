import './App.css';
import React, {useState} from 'react';
import { Routes,  Route } from 'react-router-dom';
import CreateAccount from './CreateAccount/CreateAccount';
import Login from './Login/Login';

import NewAccountHome from './NewAccountPages/NewAccountHome';
import NewAccountFriends from './NewAccountPages/NewAccountFriends';
import NewAccountPage from './NewAccountPages/NewAccountPage';
import NewAccountSearch from './NewAccountPages/NewAccountSearch';
import NewAccountSearchConfirm from './NewAccountPages/NewAccountSearchConfirm';
import NewAccountSearchConfirmAsk from './NewAccountPages/NewAccountSearchConfirmAsk';

import ReturnUserFriends from './ReturnUser/ReturnUserFriends';
import ReturnUserHome from './ReturnUser/ReturnUserHome';
import ReturnUserAccount from './ReturnUser/ReturnUserAccount';
import ReturnUserSearch from './ReturnUser/ReturnUserSearch';
import ReturnUserSearchConfirm from './ReturnUser/ReturnUserSearchConfirm';
import ReturnUserSearchConfirmAsk from './ReturnUser/ReturnUserSearchConfirmAsk';
import MapScreen from './ReturnUser/MapScreen';

function App() {


  const [newUserObj, setNewUserObj] = useState({
    name: '',
    year: '',
    dob: '',
    major: '',
    minor: '',
    likes: '',
  });


  return (
    <div className="App" >
      <Routes>
          <Route path='/' element={ <Login/>}/>
          <Route exact path="/CreateAccount" element={ <CreateAccount newUserObj={newUserObj} setNewUserObj={setNewUserObj} /> } /> 

          <Route exact path="/NewAccount/Home" element={ <NewAccountHome/> } /> 
          <Route path='/NewAccount/Friends' element={ <NewAccountFriends/>} />
          <Route path='/NewAccount/Search' element={<NewAccountSearch/>} />
          <Route path="/NewAccount/AccountPage" element={<NewAccountPage newUserObj={newUserObj}/>} />
          <Route path="/NewAccount/Search/Confirm" element={<NewAccountSearchConfirm/>} />
          <Route path="/NewAccount/Search/Confirm/Ask" element={<NewAccountSearchConfirmAsk/>} />


          <Route path='/ReturnUser/Home' element={ <ReturnUserHome/>} />
          <Route path='/ReturnUser/Friends' element={ <ReturnUserFriends/>}/>    
          <Route path="/ReturnUser/Search" element= { <ReturnUserSearch/> } />
          <Route path='/ReturnUser/AccountPage' element={ <ReturnUserAccount/>} /> 
          <Route path="/ReturnUser/Search/Map" element= { <MapScreen/> } />
          <Route path="/ReturnUser/Search/Confirm" element={<ReturnUserSearchConfirm/>} />
          <Route path="/ReturnUser/Search/Confirm/Ask" element={<ReturnUserSearchConfirmAsk/>} />
      </Routes>
    </div>
  );
}

export default App;
