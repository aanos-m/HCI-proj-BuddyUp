import './App.css';
import { Routes,  Route } from 'react-router-dom';

import About from './About';
import CreateAccount from './CreateAccount/CreateAccount';
import Login from './Login/Login';
import NewAccountHome from './NewAccountPages/NewAccountHome';
import NewAccountFriends from './NewAccountPages/NewAccountFriends';
import NewAccountPage from './NewAccountPages/NewAccountPage';
import NewAccountSearch from './NewAccountPages/NewAccountSearch';
import NewAccountSearchConfirm from './NewAccountPages/NewAccountSearchConfirm';
import NewAccountSearchConfirmAsk from './NewAccountPages/NewAccountSearchConfirmAsk';
 
function App() {
  return (
    <div className="App" >
      <Routes>
          <Route path='/' element={ <Login/>}/>
          <Route exact path="/CreateAccount" element={ <CreateAccount/> } /> 

          <Route exact path="/NewAccount/Home" element={ <NewAccountHome/> } /> 
          <Route path='/NewAccount/Friends' element={ <NewAccountFriends/>} />
          <Route path='/NewAccount/Search' element={<NewAccountSearch/>} />
          <Route path="/NewAccount/AccountPage" element={<NewAccountPage/>} />
          <Route path="/NewAccount/Search/Confirm" element={<NewAccountSearchConfirm/>} />
          <Route path="/NewAccount/Search/Confirm/Ask" element={<NewAccountSearchConfirmAsk/>} />



          <Route path='/ReturnUser' element={ <About/>}/>     
      </Routes>
    </div>
  );
}

export default App;
