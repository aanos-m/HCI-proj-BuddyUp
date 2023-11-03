import './App.css';
import { Routes,  Route } from 'react-router-dom';

import About from './About';
import CreateAccount from './CreateAccount/CreateAccount';
import Login from './Login/Login';
import NewAccountHome from './NewAccountPages/NewAccountHome';
import NewAccountFriends from './NewAccountPages/NewAccountFriends';
import NewAccountPage from './NewAccountPages/NewAccountPage';
import NewAccountSearch from './NewAccountPages/NewAccountSearch';

function App() {
  return (
    <div className="App" >
      <Routes>
          <Route path='/' element={ <Login/>}/>
          <Route exact path="/CreateAccount" element={ <CreateAccount/> } /> 

          <Route exact path="/NewAccountHome" element={ <NewAccountHome/> } /> 
          <Route path='/NewAccount/friends' element={ <NewAccountFriends/>} />
          <Route path='/NewAccount/search' element={<NewAccountSearch/>} />
          <Route path="/NewAccount/accountPage" element={<NewAccountPage/>} />



          <Route path='/ReturnUser' element={ <About/>}/>     
      </Routes>
    </div>
  );
}

export default App;
