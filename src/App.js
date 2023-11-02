import './App.css';
import { Routes,  Route } from 'react-router-dom';

import About from './About';
import CreateAccount from './CreateAccount/CreateAccount';
import Login from './Login/Login';
import NewAccount from './NewAccountPages/NewAccount';


function App() {
  return (
    <div className="App" >
      <Routes>
          <Route path='/' element={ <Login/>}/>
          <Route exact path="/CreateAccount" element={ <CreateAccount/> } /> 
          <Route exact path="/NewAccount" element={ <NewAccount/> } /> 
          <Route path='/about' element={ <About/>}/>     
      </Routes>
    </div>
  );
}

export default App;
